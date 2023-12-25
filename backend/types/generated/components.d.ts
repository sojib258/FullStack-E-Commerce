import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryDynamicZoneDisplayName extends Schema.Component {
  collectionName: 'components_category_dynamic_zone_display_names';
  info: {
    displayName: 'DynamicZoneDisplayName';
    icon: 'cube';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.dynamic-zone-display-name': CategoryDynamicZoneDisplayName;
    }
  }
}
