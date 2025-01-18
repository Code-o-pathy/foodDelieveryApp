// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         try {
//             const response = await fetch(
//                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1646403&lng=72.8530249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//             );
//             const json = await response.json();
//             res.status(200).json(json);
//         } catch (error) {
//             console.error('Error fetching Swiggy data:', error);
//             res.status(500).json({ error: 'Failed to fetch data from Swiggy' });
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }