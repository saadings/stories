export interface MultimediaType {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  width: number;
  subtype: string;
  type: string;
  url: string;
}

export interface StoryType {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: MultimediaType[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}
