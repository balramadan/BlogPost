interface Cache {
  [key: string]: {
    data: any[];
    timestamp: number;
  };
}

const cache: Cache = {};

export default async function ({
  $axios,
  route,
}: {
  $axios: any;
  route: { fullPath: string };
}): Promise<any[]> {
  // function implementation goes here
  const cacheKey = route.fullPath;

  if (cache[cacheKey] && Date.now() - cache[cacheKey].timestamp < 60000) {
    // code block
    return cache[cacheKey].data;
  }

  const response = await $axios.get("/api/post");
  cache[cacheKey] = {
    data: response.data,
    timestamp: Date.now(),
  };

  return response.data;
}
