export const TextUtil = {
    encodeRouteParams: (baseURI, params) =>
        baseURI
            .split("/")
            .map((segment) => (segment[0] === ":" ? params?.[segment.slice(1)] : segment))
            .join("/"),

    decodeURI: (search) => {
        return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, " ") + '"}', (key, value) =>
            key === "" ? value : decodeURIComponent(value),
        );
    },
};
