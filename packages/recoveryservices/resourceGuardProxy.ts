import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2021-02-01-preview.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview, 2024-10-01.
 */
export class ResourceGuardProxy extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGuardProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourceGuardProxy {
        return new ResourceGuardProxy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ResourceGuardProxy';

    /**
     * Returns true if the given object is an instance of ResourceGuardProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceGuardProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceGuardProxy.__pulumiType;
    }

    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ResourceGuardProxyBaseResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ResourceGuardProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceGuardProxyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuardProxyName"] = args ? args.resourceGuardProxyName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20210201preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20210701:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20210801:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20211001:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20211201:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220101:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220201:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220301:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220401:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220601preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220901preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20220930preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20221001:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20230101:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20230201:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20230401:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20230601:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20230801:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20240101:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20240201:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20240401:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20240430preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20240730preview:ResourceGuardProxy" }, { type: "azure-native:recoveryservices/v20241001:ResourceGuardProxy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ResourceGuardProxy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ResourceGuardProxy resource.
 */
export interface ResourceGuardProxyArgs {
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    properties?: pulumi.Input<types.inputs.ResourceGuardProxyBaseArgs>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    resourceGuardProxyName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}