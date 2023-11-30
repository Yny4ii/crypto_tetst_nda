export const makeQuery = (params: {
    [key: string]: string | number | Array<string | number> | undefined;
}) => {
    let query = new URLSearchParams();

    Object.keys(params).forEach((el) => {
        if (!params[el]) return;

        if (Array.isArray(params[el])) {
            const paramsArr = params[el] as Array<string | number>;
            paramsArr.forEach((param) => {
                query.append(el, `${param}`);
            });
        } else {
            query.set(el, `${params[el]}`);
        }
    });
    return '?' + query.toString();
};
