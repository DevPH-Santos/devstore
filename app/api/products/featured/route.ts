import data from '../data.json'

export async function GET() {
    const featuredProdutcts = data.products.filter((product) => product.featured)

    return Response.json(featuredProdutcts)
}