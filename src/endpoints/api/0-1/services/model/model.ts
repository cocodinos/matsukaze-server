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
    for(let key in params) {
      if(!Array.isArray(params[key]) && params[key]!="matsukazeObjectType") this[key] = params[key];
    }
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
  i18nBundleElements: {[language: string]: I18nBundleElement};

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.i18nBundle; }

  getText(language: string): string {
    if(this?.i18nBundleElements[language]) return this.i18nBundleElements[language].text; else return null;
  }
}

export class I18nBundleElement extends MatsukazeObject {
  id: number;
  language: Language;
  text: string;

  constructor(params: any) { super(params); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.i18nBundleElement; }

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
  children: StoryStructureElement[];

  constructor(params: any) { super(params); }

}

export class Story extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.story;

  constructor(params: any) { super(params); }

}

export class Act extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.act;

  constructor(params: any) { super(params); }

  getNavLabel(): string {
    var tmp: string = "Act " + this.position;
    if(this.title) tmp = tmp + ": " + this.title
    return tmp
  }
}

export class SceneSequence extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.sceneSequence;

  constructor(params: any) { super(params); }

  getNavLabel(): string {
    var tmp: string = "Scene " + this.position;
    if(this.title) tmp = tmp + ": " + this.title
    return tmp
  }
}

export class Scene extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.scene;

  constructor(params: any) { super(params); }

  getNavLabel(): string {
    var tmp: string = "Scene " + this.position;
    return tmp
  }
}

export class Beat extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.beat;

  constructor(params: any) { super(params); }

}

export class MomentSequence extends StoryStructureElement {

  summary: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.momentSequence;

  constructor(params: any) { super(params); }

}

export class Moment extends StoryStructureElement {

  action: string;
  notes: string;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.moment;

  constructor(params: any) { super(params); }

}

export class DialogueLine extends StoryStructureElement {

  type: string;
  source: string;
  i18nBundle: I18nBundle;
  matsukazeObjectType: MatsukazeObjectTypes = MatsukazeObjectTypes.dialogueLine;

  constructor(params: any) { super(params); }

  getText(language: string): string {
    if(this.i18nBundle) return this.i18nBundle.getText(language); else return null;
  }

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
