import { getAllPerfumes } from './../models/perfumes.js'
export async function getPerfumes() {
  const rawData = await getAllPerfumes();
  const result = {
    brands: [],
    brandPerfumes: {},
    rawData
  };
  rawData.forEach(p => {
    const csvData = p.split(';');
    if (csvData.length == 4) {
      const brand = csvData[0];

      if (!result.brands.includes(brand)) {
        result.brands.push(brand);
        result.brandPerfumes[brand] = []
      }

      const perfume = {
        name: csvData[1],
        description: csvData[2],
        url: csvData[3]
      }

      result.brandPerfumes[brand].push(perfume)
    }
  });
  return result;
}