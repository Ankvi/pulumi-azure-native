import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Public Cloud Connector
 *
 * Uses Azure REST API version 2024-12-01. In version 2.x of the Azure Native provider, it used API version 2024-12-01.
 */
export class PublicCloudConnector extends pulumi.CustomResource {
    /**
     * Get an existing PublicCloudConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicCloudConnector {
        return new PublicCloudConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridconnectivity:PublicCloudConnector';

    /**
     * Returns true if the given object is an instance of PublicCloudConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicCloudConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicCloudConnector.__pulumiType;
    }

    /**
     * Cloud profile for AWS.
     */
    public readonly awsCloudProfile!: pulumi.Output<types.outputs.AwsCloudProfileResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Connector primary identifier.
     */
    public /*out*/ readonly connectorPrimaryIdentifier!: pulumi.Output<string>;
    /**
     * Host cloud the public cloud connector.
     */
    public readonly hostType!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PublicCloudConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicCloudConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.awsCloudProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'awsCloudProfile'");
            }
            if ((!args || args.hostType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["awsCloudProfile"] = args ? (args.awsCloudProfile ? pulumi.output(args.awsCloudProfile).apply(types.inputs.awsCloudProfileArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["hostType"] = args ? args.hostType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicCloudConnector"] = args ? args.publicCloudConnector : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectorPrimaryIdentifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["awsCloudProfile"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectorPrimaryIdentifier"] = undefined /*out*/;
            resourceInputs["hostType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridconnectivity/v20241201:PublicCloudConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PublicCloudConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicCloudConnector resource.
 */
export interface PublicCloudConnectorArgs {
    /**
     * Cloud profile for AWS.
     */
    awsCloudProfile: pulumi.Input<types.inputs.AwsCloudProfileArgs>;
    /**
     * Host cloud the public cloud connector.
     */
    hostType: pulumi.Input<string | types.enums.HostType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Represent public cloud connectors resource.
     */
    publicCloudConnector?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}