import { categoryType } from "./category.types"
import { genreType } from "./genre.types"
import { ResponseeType } from "./response.types"
import { statusType } from "./status.types"

export type bookType = {
    bookId: number,
    bookName: string,
    category: categoryType,
    genre: genreType,
    authorId: number,
    status: statusType,
    description: string,
    imagePath: string,
    responses: ResponseeType[],
    // borrowingId:number[],
    // requestId:number[]
}



