export type Currency ={
    ticker: string
    name: string
    image: string
    hasExternalId: boolean
    isFiat: boolean
    featured: boolean
    isStable: boolean
    supportsFixedRate: boolean
    network: string
    tokenContract: any
    buy: boolean
    sell: boolean
    legacyTicker: string
}

export type MinimalExchangeAmount =  {
    fromCurrency: string
    fromNetwork: string
    toCurrency: string
    toNetwork: string
    flow: string
    minAmount: number
}
export type EstimatedExchangeAmount = {
    fromCurrency: string
    fromNetwork: string
    toCurrency: string
    toNetwork: string
    flow: string
    type: string
    rateId: string
    validUntil: string
    transactionSpeedForecast: any
    warningMessage: any
    depositFee: number
    withdrawalFee: number
    userId: any
    fromAmount: number
    toAmount: number
}

