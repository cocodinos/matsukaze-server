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
  I18nBundleText = "I18nText",
  I18nBundle = "I18nBundle",
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
  id: string = null;
  type: MatsukazeObjectTypes;

  constructor(params: any) {
    for(let key in params) { if(!Array.isArray(params[key])) this[key] = params[key]; }
  }

  toJson(): any { const json = JSON.stringify(this); }

  getType(): MatsukazeObjectTypes { return null; }
}

// BASE CLASSES ----------------------------------------------------------------

export interface Positioned {
  id: string;
  position: number;
}

export class Project extends MatsukazeObject {
  id: string;
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
  id: string;
  email: string;
  roles: Role[];

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.user; }
}

export class Role extends MatsukazeObject {
  id: string;
  name: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.role; }
}

export class Language extends MatsukazeObject {
  id: string;
  locale: string;
  name: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.language; }
}

export class I18nBundle extends MatsukazeObject {
  id: string;

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.I18nBundle; }
}

export class I18nBundleText extends MatsukazeObject {
  id: string;
  language: Language;
  text: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.I18nBundleText; }

}

export class Publication extends MatsukazeObject {
  id: string;
  title: I18nBundle;
  projectId: number
  pages: Page[] = [];

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

}

// STORY STRUCTURE ELEMENTS ----------------------------------------------------

export interface StructureElement extends Positioned {
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];
}

export class Story extends MatsukazeObject implements StructureElement {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.story;
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];

  title: string;
  summary: string;
  notes: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  copy(): Story { return new Story(JSON.stringify(this)); }

}

export class Act extends MatsukazeObject implements StructureElement {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.act;
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];

  title: string;
  summary: string;
  notes: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  copy(): Act { return new Act(JSON.stringify(this)); }

}

export class Scene extends MatsukazeObject implements StructureElement {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.scene;
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];

  title: string;
  summary: string;
  notes: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  copy(): Scene { return new Scene(JSON.stringify(this)); }

}

export class Beat extends MatsukazeObject implements StructureElement {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.beat;
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];

  summary: string;
  action: string;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.beat; }
}

export class DialogueLine extends MatsukazeObject implements StructureElement {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.dialogueLine;
  parentId: string;
  children$: Observable<StructureElement[]>;
  children: StructureElement[];

  text: I18nBundle;

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.dialogueLine; }
}

// PUBLICATION ELEMENTS ----------------------------------------------------

export class Page extends MatsukazeObject implements Positioned {
  id: string;
  position: number;
  type: MatsukazeObjectTypes.dialogueLine;

  publicationId: string;
  summary: string;
  notes: string;
  beats: Beat[] = [];

  constructor(params: any) { super(params); }

  toJson(): any { return super.toJson(); }

  getType(): MatsukazeObjectTypes { return MatsukazeObjectTypes.page; }
}
