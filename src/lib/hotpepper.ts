export function reserveUrl(storeId: string) {
    return `https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=${storeId}`;
}

export function couponUrl(storeId: string) {
    return `https://beauty.hotpepper.jp/sln${storeId}/coupon/`;
}

export function styleUrl(storeId: string) {
    return `https://beauty.hotpepper.jp/sln${storeId}/style/`;
}

export function stylistBaseUrl(storeId: string) {
    return `https://beauty.hotpepper.jp/sln${storeId}/stylist/`;
}
