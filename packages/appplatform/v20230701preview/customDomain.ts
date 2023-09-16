import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Custom domain resource payload.
 */
export class CustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing CustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomDomain {
        return new CustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230701preview:CustomDomain';

    /**
     * Returns true if the given object is an instance of CustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomDomain.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the custom domain resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.appplatform.v20230701preview.CustomDomainPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.appplatform.v20230701preview.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:CustomDomain" }, { type: "azure-native:appplatform/v20200701:CustomDomain" }, { type: "azure-native:appplatform/v20201101preview:CustomDomain" }, { type: "azure-native:appplatform/v20210601preview:CustomDomain" }, { type: "azure-native:appplatform/v20210901preview:CustomDomain" }, { type: "azure-native:appplatform/v20220101preview:CustomDomain" }, { type: "azure-native:appplatform/v20220301preview:CustomDomain" }, { type: "azure-native:appplatform/v20220401:CustomDomain" }, { type: "azure-native:appplatform/v20220501preview:CustomDomain" }, { type: "azure-native:appplatform/v20220901preview:CustomDomain" }, { type: "azure-native:appplatform/v20221101preview:CustomDomain" }, { type: "azure-native:appplatform/v20221201:CustomDomain" }, { type: "azure-native:appplatform/v20230101preview:CustomDomain" }, { type: "azure-native:appplatform/v20230301preview:CustomDomain" }, { type: "azure-native:appplatform/v20230501preview:CustomDomain" }, { type: "azure-native:appplatform/v20230901preview:CustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomDomain resource.
 */
export interface CustomDomainArgs {
    /**
     * The name of the App resource.
     */
    appName: pulumi.Input<string>;
    /**
     * The name of the custom domain resource.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Properties of the custom domain resource.
     */
    properties?: pulumi.Input<types.inputs.appplatform.v20230701preview.CustomDomainPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
