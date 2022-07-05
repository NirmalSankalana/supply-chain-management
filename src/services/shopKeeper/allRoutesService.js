const routes = [
    {
        route_id: 1,
        start_city: 'aa',
        end_city: 'bb',
      },
      {
        route_id: 2,
        start_city: 'cc',
        end_city: 'dd',
      },
      {
        route_id: 3,
        start_city: 'ee',
        end_city: 'ff',
      },
  ]
  
  export function getDeliveryRoutes() {
    return routes;
  }
  
  export default {
    getDeliveryRoutes,
  }
  