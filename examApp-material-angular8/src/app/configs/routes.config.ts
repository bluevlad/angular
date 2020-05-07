import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  error404: '404',
  member: '회원정보',
  exam: '시험정보',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: ``,
    member: `/member-list`,
    exam: `/member-list`,
    error404: `/${routesNames.error404}`,
  }
};
