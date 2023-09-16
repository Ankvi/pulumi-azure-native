import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateStoreCollectionArgs, GetPrivateStoreCollectionResult, GetPrivateStoreCollectionOutputArgs } from "./getPrivateStoreCollection";
export const getPrivateStoreCollection: typeof import("./getPrivateStoreCollection").getPrivateStoreCollection = null as any;
export const getPrivateStoreCollectionOutput: typeof import("./getPrivateStoreCollection").getPrivateStoreCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateStoreCollection","getPrivateStoreCollectionOutput"], () => require("./getPrivateStoreCollection"));

export { GetPrivateStoreCollectionOfferArgs, GetPrivateStoreCollectionOfferResult, GetPrivateStoreCollectionOfferOutputArgs } from "./getPrivateStoreCollectionOffer";
export const getPrivateStoreCollectionOffer: typeof import("./getPrivateStoreCollectionOffer").getPrivateStoreCollectionOffer = null as any;
export const getPrivateStoreCollectionOfferOutput: typeof import("./getPrivateStoreCollectionOffer").getPrivateStoreCollectionOfferOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateStoreCollectionOffer","getPrivateStoreCollectionOfferOutput"], () => require("./getPrivateStoreCollectionOffer"));

export { ListPrivateStoreNewPlansNotificationsArgs, ListPrivateStoreNewPlansNotificationsResult, ListPrivateStoreNewPlansNotificationsOutputArgs } from "./listPrivateStoreNewPlansNotifications";
export const listPrivateStoreNewPlansNotifications: typeof import("./listPrivateStoreNewPlansNotifications").listPrivateStoreNewPlansNotifications = null as any;
export const listPrivateStoreNewPlansNotificationsOutput: typeof import("./listPrivateStoreNewPlansNotifications").listPrivateStoreNewPlansNotificationsOutput = null as any;
utilities.lazyLoad(exports, ["listPrivateStoreNewPlansNotifications","listPrivateStoreNewPlansNotificationsOutput"], () => require("./listPrivateStoreNewPlansNotifications"));

export { ListPrivateStoreStopSellOffersPlansNotificationsArgs, ListPrivateStoreStopSellOffersPlansNotificationsResult, ListPrivateStoreStopSellOffersPlansNotificationsOutputArgs } from "./listPrivateStoreStopSellOffersPlansNotifications";
export const listPrivateStoreStopSellOffersPlansNotifications: typeof import("./listPrivateStoreStopSellOffersPlansNotifications").listPrivateStoreStopSellOffersPlansNotifications = null as any;
export const listPrivateStoreStopSellOffersPlansNotificationsOutput: typeof import("./listPrivateStoreStopSellOffersPlansNotifications").listPrivateStoreStopSellOffersPlansNotificationsOutput = null as any;
utilities.lazyLoad(exports, ["listPrivateStoreStopSellOffersPlansNotifications","listPrivateStoreStopSellOffersPlansNotificationsOutput"], () => require("./listPrivateStoreStopSellOffersPlansNotifications"));

export { ListPrivateStoreSubscriptionsContextArgs, ListPrivateStoreSubscriptionsContextResult, ListPrivateStoreSubscriptionsContextOutputArgs } from "./listPrivateStoreSubscriptionsContext";
export const listPrivateStoreSubscriptionsContext: typeof import("./listPrivateStoreSubscriptionsContext").listPrivateStoreSubscriptionsContext = null as any;
export const listPrivateStoreSubscriptionsContextOutput: typeof import("./listPrivateStoreSubscriptionsContext").listPrivateStoreSubscriptionsContextOutput = null as any;
utilities.lazyLoad(exports, ["listPrivateStoreSubscriptionsContext","listPrivateStoreSubscriptionsContextOutput"], () => require("./listPrivateStoreSubscriptionsContext"));

export { PrivateStoreCollectionArgs } from "./privateStoreCollection";
export type PrivateStoreCollection = import("./privateStoreCollection").PrivateStoreCollection;
export const PrivateStoreCollection: typeof import("./privateStoreCollection").PrivateStoreCollection = null as any;
utilities.lazyLoad(exports, ["PrivateStoreCollection"], () => require("./privateStoreCollection"));

export { PrivateStoreCollectionOfferArgs } from "./privateStoreCollectionOffer";
export type PrivateStoreCollectionOffer = import("./privateStoreCollectionOffer").PrivateStoreCollectionOffer;
export const PrivateStoreCollectionOffer: typeof import("./privateStoreCollectionOffer").PrivateStoreCollectionOffer = null as any;
utilities.lazyLoad(exports, ["PrivateStoreCollectionOffer"], () => require("./privateStoreCollectionOffer"));


// Export enums:
export * from "../types/enums/v20230101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:marketplace/v20230101:PrivateStoreCollection":
                return new PrivateStoreCollection(name, <any>undefined, { urn })
            case "azure-native:marketplace/v20230101:PrivateStoreCollectionOffer":
                return new PrivateStoreCollectionOffer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "marketplace/v20230101", _module)
