import { Observable } from 'rxjs';

export enum PagePosition {
  left = "LEFT",
  right = "RIGHT"
}

export enum MatsukazeObjectTypes {
  story = "Story",
  act = "Act",
  sceneSequence = "SceneSequence",
  scene = "Scene",
  beat = "Beat",
  momentSequence = "MomentSequence",
  moment = "Moment",
  dialogueLine = "DialogueLine",
  publication = "Publication",
  page = "Page",
  i18nBundleElement = "I18nBundleElement",
  i18nBundle = "I18nBundle",
  language = "Language",
  role = "Role",
  user = "User",
  project = "Project"
}

export enum LetteringTypes {
  caption = "CAPTION",
  speech = "SPEAKING",
  whisper = "WHISPERING",
  thought = "THINKING",
  shout = "SHOUTING",
  continued = "...CONTINUED",
  soundEffect = "SOUND EFFECTS",
  music = "MUSIC"
}

// MatsukazeObject DEFINITION---------------------------------------------------------------

export class MatsukazeObject {
  id: number = null;
  matsukazeObjectType: MatsukazeObjectTypes;

  constructor(params: any) {
    this.id = params.id;
    this.matsukazeObjectType = null;
  }

  toPOJO(): any {
    var json: any = {};
    for(let key in this) {
      if(typeof this[key]!="object") json[key] = this[key];
    }
    return json;
  }

  getType(): MatsukazeObjectTypes { return null; }
}

// BASE CLASSES ----------------------------------------------------------------

export interface Positioned {
  id: number;
  position: number;
  matsukazeObjectType: MatsukazeObjectTypes;
}

export class Project extends MatsukazeObject {
  id: number;
  title: string;
  team: Array<string>;
  stories: Story[];
  publications: Publication[];
  languages: Language[];

  constructor(params: any) { super(params); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.project; }
}

export class User extends MatsukazeObject {
  id: number;
  email: string;
  roles: Role[];

  constructor(params: any) { super(params); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.user; }
}

export class Role extends MatsukazeObject {
  id: number;
  name: string;

  constructor(params: any) { super(params); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.role; }
}

export class Language extends MatsukazeObject {
  id: number;
  locale: string;
  name: string;

  constructor(params: any) { super(params); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.language; }
}

export class I18nBundle extends MatsukazeObject {
  id: number;
  i18nBundleElements: {[language: string]: I18nBundleElement} = {};
  matsukazeObjectType = MatsukazeObjectTypes.i18nBundle

  constructor(params: any) {
    super(params);
    this.id = params.id;
    for(let key in params.i18nBundleElements) {
      this.i18nBundleElements[String(key)] = new I18nBundleElement(params.i18nBundleElements[key]);
    }
  }

  getText(language: string): string {
    if(this?.i18nBundleElements[language]) return this.i18nBundleElements[language].text; else return null;
  }
}

export class I18nBundleElement extends MatsukazeObject {
  id: number;
  language: Language;
  text: string;
  matsukazeObjectType = MatsukazeObjectTypes.i18nBundleElement

  constructor(params: any) {
    super(params);
    this.id = params.id;
    this.language = params.language;
    this.text = params.text;
  }

}

export class Publication extends MatsukazeObject {
  id: number;
  title: I18nBundle;
  projectId: number
  pages: Page[] = [];

  constructor(params: any) { super(params); }

}

// STORY STRUCTURE ELEMENTS ----------------------------------------------------

export interface StoryNode extends StoryStructureElement {
  children$: Observable<StoryStructureElement[]>;
  children: StoryStructureElement[];
}

export class StoryStructureElement extends MatsukazeObject implements Positioned, StoryNode {

  matsukazeObjectType: MatsukazeObjectTypes;
  projectId: string;
  parentId: number;
  position: number;
  children$: Observable<StoryStructureElement[]>;
  children: StoryStructureElement[] = [];

  constructor(params: any) {
    super(params);
    this.projectId = params.projectId;
    this.parentId = params.parentId;
    this.position = params.position;
    this.children = [];
  }

  getNavLabel(): string {
    return null;
  }

}

export class Story extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.story;

  constructor(params: any) {
    super(params);
    this.title = params.title;
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new Act(child));
      }
    }
  }

  getNavLabel(): string { return "Story"; }
}

export class Act extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.act;

  constructor(params: any) {
    super(params);
    this.title = params.title;
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new SceneSequence(child));
      }
    }
  }

  getNavLabel(): string { return "Act " + this.position; }
}

export class SceneSequence extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.sceneSequence;

  constructor(params: any) {
    super(params);
    this.title = params.title;
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new Scene(child));
      }
    }
  }

  getNavLabel(): string { return "Scene sequence " + this.position; }
}

export class Scene extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.scene;

  constructor(params: any) {
    super(params);
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new Beat(child));
      }
    }
  }

  getNavLabel(): string { return "Scene " + this.position; }
}

export class Beat extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.beat;

  constructor(params: any) {
    super(params);
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new MomentSequence(child));
      }
    }
  }

  getNavLabel(): string { return "Beat " + this.position; }
}

export class MomentSequence extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.momentSequence;

  constructor(params: any) {
    super(params);
    this.summary = params.summary;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new Moment(child));
      }
    }
  }

  getNavLabel(): string { return "Moment seqence " + this.position; }
}

export class Moment extends StoryStructureElement {

  action: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.moment;

  constructor(params: any) {
    super(params);
    this.action = params.action;
    this.notes = params.note;
    if(params?.children) {
      for(let child of params?.children) {
        this.children.push(new DialogueLine(child));
      }
    }
  }

  getNavLabel(): string { return "Moment " + this.position; }
}

export class DialogueLine extends StoryStructureElement {

  type: string;
  source: string;
  i18nBundle: I18nBundle;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.dialogueLine;

  constructor(params: any) {
    super(params);
    this.type = params.type;
    this.source = params.source;
    if(params.i18nBundle) this.i18nBundle = new I18nBundle(params.i18nBundle);
  }

  getText(language: string): string {
    if(this.i18nBundle) return this.i18nBundle.getText(language); else return null;
  }

  getNavLabel(): string { return "Dialogue line " + this.position; }

}

// PUBLICATION ELEMENTS ----------------------------------------------------

export class Page extends MatsukazeObject implements Positioned {
  id: number;
  position: number;
  type: MatsukazeObjectTypes = MatsukazeObjectTypes.page;

  publicationId: string;
  summary: string;
  notes: string;
  beats: Beat[] = [];

  constructor(params: any) { super(params); }

}
