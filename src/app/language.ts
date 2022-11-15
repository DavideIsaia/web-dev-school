import { DevLangBase } from "./dev-lang-base";

export interface DevLanguage {
  dev_lang: DevLangBase;
  username: string;
  progress: number;
  doc_vote: number;
	tut_vote: number;
	exc1_vote: number;
	exc2_vote: number;
	exc3_vote: number;
	exc4_vote: number;
}

  // id: number;
  // name: string;
  // symbol: string;
  // color: string,
  // description: string;
  // links: {
  //   docs: string;
  //   video: string;
  // };
  // exercises: {
  //   beginner: string;
  //   intermediate: string;
  //   advanced: string;
  //   expert: string;
  // };

