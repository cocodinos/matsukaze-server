import { Observable } from 'rxjs';

export enum PagePosition {
  left = "LEFT",
  right = "RIGHT"
}

export enum MatsukazeObjectTypes {
  story = "Story",
  panel = "Panel",
  page = "Page",
  act = "Act",
  scene = "Scene",
  beat = "Beat",
  dialogueLine = "DialogueLine",
  publication = "Publication",
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
    for(let key in params) { if(!Array.isArray(params[key])) this[key] = params[key]; }
  }

  toJson(): any { const json = JSON.stringify(this); }

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

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.project; }
}

export class User extends MatsukazeObject {
  id: number;
  email: string;
  roles: Role[];

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.user; }
}

export class Role extends MatsukazeObject {
  id: number;
  name: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.role; }
}

export class Language extends MatsukazeObject {
  id: number;
  locale: string;
  name: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.language; }
}

export class I18nBundle extends MatsukazeObject {
  id: number;
  elements: {[language: string]: I18nBundleElement};

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.i18nBundle; }
}

export class I18nBundleElement extends MatsukazeObject {
  id: number;
  language: Language;
  text: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.i18nBundleElement; }

}

export class Publication extends MatsukazeObject {
  id: number;
  title: I18nBundle;
  projectId: number
  pages: Page[] = [];

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

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

  constructor(params: any) { super(params); }

}

export class Act extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;

  constructor(params: any) { super(params); }

}

export class Scene extends StoryStructureElement {

  title: string;
  summary: string;
  notes: string;

  constructor(params: any) { super(params); }

}

export class Beat extends StoryStructureElement {

  summary: string;
  action: string;

  constructor(params: any) { super(params); }

}

export class DialogueLine extends StoryStructureElement {

  type: string;
  source: string;
  i18nBundle: I18nBundle;

  constructor(params: any) { super(params); }

}

// PUBLICATION ELEMENTS ----------------------------------------------------

export class Page extends MatsukazeObject implements Positioned {
  id: number;
  position: number;
  type: MatsukazeObjectTypes.dialogueLine;

  publicationId: string;
  summary: string;
  notes: string;
  beats: Beat[] = [];

  constructor(params: any) { super(params); }

}
