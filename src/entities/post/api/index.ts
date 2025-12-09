import { PostResponse } from "../model/types"

// 공통으로 사용할 URL 파라미터 생성 함수
const makeParams = (limit: number, skip: number, sortBy?: string, sortOrder?: string) => {
  let params = `limit=${limit}&skip=${skip}`
  if (sortBy && sortBy !== "none") {
    params += `&sortBy=${sortBy}&order=${sortOrder}`
  }
  return params
}

// 1. 기본 목록 조회
export const getPosts = async (
  limit: number,
  skip: number,
  sortBy?: string,
  sortOrder?: string,
): Promise<PostResponse> => {
  const params = makeParams(limit, skip, sortBy, sortOrder)
  const response = await fetch(`/api/posts?${params}`)
  return response.json()
}

// 2. 검색어 조회 (여기에도 sortBy, sortOrder 추가!)
export const searchPosts = async (
  query: string,
  limit: number,
  skip: number,
  sortBy?: string,
  sortOrder?: string,
): Promise<PostResponse> => {
  // 검색 API는 q 파라미터가 필수
  const params = makeParams(limit, skip, sortBy, sortOrder)
  const response = await fetch(`/api/posts/search?q=${query}&${params}`)
  return response.json()
}

// 3. 태그별 조회 (여기에도 sortBy, sortOrder 추가!)
export const getPostsByTag = async (
  tag: string,
  limit: number,
  skip: number,
  sortBy?: string,
  sortOrder?: string,
): Promise<PostResponse> => {
  const params = makeParams(limit, skip, sortBy, sortOrder)
  const response = await fetch(`/api/posts/tag/${tag}?${params}`)
  return response.json()
}
