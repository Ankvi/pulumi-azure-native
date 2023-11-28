import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Static Site User Provided Function App ARM resource.
 */
export class StaticSiteUserProvidedFunctionAppForStaticSite extends pulumi.CustomResource {
    /**
     * Get an existing StaticSiteUserProvidedFunctionAppForStaticSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StaticSiteUserProvidedFunctionAppForStaticSite {
        return new StaticSiteUserProvidedFunctionAppForStaticSite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20230101:StaticSiteUserProvidedFunctionAppForStaticSite';

    /**
     * Returns true if the given object is an instance of StaticSiteUserProvidedFunctionAppForStaticSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticSiteUserProvidedFunctionAppForStaticSite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticSiteUserProvidedFunctionAppForStaticSite.__pulumiType;
    }

    /**
     * The date and time on which the function app was registered with the static site.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * The region of the function app registered with the static site
     */
    public readonly functionAppRegion!: pulumi.Output<string | undefined>;
    /**
     * The resource id of the function app registered with the static site
     */
    public readonly functionAppResourceId!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StaticSiteUserProvidedFunctionAppForStaticSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteUserProvidedFunctionAppForStaticSiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["functionAppName"] = args ? args.functionAppName : undefined;
            resourceInputs["functionAppRegion"] = args ? args.functionAppRegion : undefined;
            resourceInputs["functionAppResourceId"] = args ? args.functionAppResourceId : undefined;
            resourceInputs["isForced"] = args ? args.isForced : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["functionAppRegion"] = undefined /*out*/;
            resourceInputs["functionAppResourceId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20201201:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20210101:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20210115:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20210201:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20210301:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20220301:StaticSiteUserProvidedFunctionAppForStaticSite" }, { type: "azure-native:web/v20220901:StaticSiteUserProvidedFunctionAppForStaticSite" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StaticSiteUserProvidedFunctionAppForStaticSite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StaticSiteUserProvidedFunctionAppForStaticSite resource.
 */
export interface StaticSiteUserProvidedFunctionAppForStaticSiteArgs {
    /**
     * Name of the function app to register with the static site.
     */
    functionAppName?: pulumi.Input<string>;
    /**
     * The region of the function app registered with the static site
     */
    functionAppRegion?: pulumi.Input<string>;
    /**
     * The resource id of the function app registered with the static site
     */
    functionAppResourceId?: pulumi.Input<string>;
    /**
     * Specify <code>true</code> to force the update of the auth configuration on the function app even if an AzureStaticWebApps provider is already configured on the function app. The default is <code>false</code>.
     */
    isForced?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
