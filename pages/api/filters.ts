// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFiltersFromGRPC } from './grpcUtils';
// import { filtersParams } from 'tools/filters';

   
import { SectionPath } from '@winestyle-ru/grpc-web-api/src/ts/ws/storefront/catalog/v1/catalog_pb';

export const filtersParams = (slug: string[]) => ({
  section: { path: slug.reduce((section, slug) => `${section}/${slug}`, '') } as SectionPath.AsObject,
  filterLimit: 21, //  Ограничение на количество фильтров в группе
  minFilterCountForLimitation: 5, // Если значений больше, то filterLimit сработает, иначе выгружается весь набор фильтров
  groupCodesList: [], // Фильтрация групп по коду ['wcolor', 'region', 'price']
});

// export default (req, res) => {
//     res.status(200).json({
//         data: [{
//                 id: 'color',
//                 label: 'Цвет',
//                 filters: [
//                     { id: 'red', label: 'Красное' },
//                     { id: 'white', label: 'Белое' },
//                     { id: 'rose', label: 'Розовое' },
//                     { id: 'orange-wine', label: 'Оранжевое' },
//                 ],
//             },
//             {
//                 id: 'region',
//                 label: 'Регион',
//                 filters: [
//                     { id: 'france', label: 'Франция' },
//                     { id: 'italy', label: 'Италия' },
//                     { id: 'spain', label: 'Испания' },
//                     { id: 'germany', label: 'Германия' },
//                 ],
//             },
//         ],
//     });
// };

export default async (req, res) => {
    const filters = req.query.filters ? req.query.filters.split(',') : [];
    const params = filtersParams(filters);

    await getFiltersFromGRPC(params).then((data) => res.status(200).json(data));
};