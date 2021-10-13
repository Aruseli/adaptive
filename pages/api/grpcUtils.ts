import {
  GetBreadcrumbsRequest,
  GetCanonicalSectionRequest,
  GetCanonicalSectionResponse,
  GetFiltersRequest,
  GetFiltersResponse,
  GetProductsRequest,
} from '@winestyle-ru/grpc-web-api/src/ts/ws/storefront/catalog/v1/catalog_api_pb';
import {
  Paginator,
  Section,
  SectionPath,
  Sorting,
} from '@winestyle-ru/grpc-web-api/src/ts/ws/storefront/catalog/v1/catalog_pb';
import { CatalogAPIClient } from '@winestyle-ru/grpc-web-api/src/ts/ws/storefront/catalog/v1/Catalog_apiServiceClientPb.js';
// import { ProductRequestParams, SortingTarget } from 'types/Organisms/ProductCard/CatalogProductCard.types';

import * as XHR2 from 'xhr2';
global.XMLHttpRequest = XHR2;

const API_BASE_FALLBACK = 'https://cognacstyle.ru:49999';

export const catalogAPIClient = new CatalogAPIClient(String(process.env.NEXT_PUBLIC_API_HOST || API_BASE_FALLBACK));

// Чтобы узнать актуальную версию пакета @winestyle-ru/grpc-web-api
export const version = `${API_BASE_FALLBACK}/help`;

export const getPath = (slug: string[]): SectionPath.AsObject => ({
  path: slug.reduce((section, slug) => `${section}/${slug}`, ''),
});

export const getBreadcrumbsFromGRPC = async (params: Section.AsObject) => {
  try {
      const path = new SectionPath();
      path.setPath(params.path.path.replace('_ll', ''));

      const request = new GetBreadcrumbsRequest();
      request.setSection(path);

      const response = await catalogAPIClient.getBreadcrumbs(request, null);

      return response.toObject();
  } catch (err) {
      console.error(err);
  }
};

export const getProductsFromGRPC = async (params: any) => {
  try {
      const pathObject = getPath(params.slug);

      const section = new SectionPath();
      section.setPath(pathObject.path);

      const sortingList = params.sortingList.map((sortingParams) => {
          const sorting = new Sorting();
          sorting.setDirection(sortingParams.direction);
          sorting.setTarget(sortingParams.target);

          return sorting;
      });

      const paginator = new Paginator();
      paginator.setPage(params.paginator.page);
      paginator.setItemsPerPage(params.paginator.itemsPerPage);

      const request = new GetProductsRequest();
      request.setSection(section);
      request.setSortingList(sortingList);
      request.setPaginator(paginator);

      const response = await catalogAPIClient.getProducts(request, null);

      return response.toObject();
  } catch (err) {
      console.error(err);
  }
};

export const getCanonicalSectionFromGRPC = async (slug: string[]): Promise<GetCanonicalSectionResponse.AsObject> => {
  try {
      const pathObject = getPath(slug);
      const section = new SectionPath();
      section.setPath(pathObject.path);

      const request = new GetCanonicalSectionRequest();
      request.setSection(section);

      const response = await catalogAPIClient.getCanonicalSection(request, null);

      return response.toObject();
  } catch (err) {
      console.error(err);
  }
};

export const getFiltersFromGRPC = async (params: GetFiltersRequest.AsObject) => {
  try {
      const section = new SectionPath();
      const request = new GetFiltersRequest();

      section.setPath(params.section.path);

      request.setSection(section);
      request.setFilterLimit(params.filterLimit);
      request.setMinFilterCountForLimitation(params.minFilterCountForLimitation);
      request.setGroupCodesList(params.groupCodesList);

      const response: GetFiltersResponse = await catalogAPIClient.getFilters(request, null);

      return response.toObject().filterGroupsList;
  } catch (err) {
      console.error(err);
  }
};