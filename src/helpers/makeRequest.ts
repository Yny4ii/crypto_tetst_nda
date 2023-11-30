import {makeQuery} from "@/helpers/makeQuery";

const api = 'https://api.changenow.io/v2/exchange/'


type CustomFetchParamsType<R, P> = {
    url: RequestInfo | URL;
    options?: RequestInit;
    params?: P;
    transformResponse?: (res: R) => R;
};

export async function makeRequest<
    R,
    P extends { [key: string]: string | number | (string | number)[] } | undefined
>({ url, options, params, transformResponse }: CustomFetchParamsType<R, P>) {
    const queryParams = params ? makeQuery({ ...params }) : '';

    const res = await fetch(`${api}` + url + queryParams, {
        next: { revalidate: 0 },
        ...options,
    });

    if (!res.ok) {
        console.error(res);
        throw res;
    }

    const parsedRes = (await res.json()) as R;

    if (transformResponse) {
        return transformResponse(parsedRes);
    }
    return parsedRes;
}
