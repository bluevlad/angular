import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  error404: '404',
  member: 'member-list',
  exam: 'exam-list',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: ``,
    member: `/member-list`,
    exam: `/exam-list`,
    error404: `/404`,
  }
};
