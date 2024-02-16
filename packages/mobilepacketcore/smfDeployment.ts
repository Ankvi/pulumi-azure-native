import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure for Operators 5G Core Session Management Function (SMF) Deployment Resource
 * Azure REST API version: 2023-10-15-preview.
 */
export class SmfDeployment extends pulumi.CustomResource {
    /**
     * Get an existing SmfDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SmfDeployment {
        return new SmfDeployment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilepacketcore:SmfDeployment';

    /**
     * Returns true if the given object is an instance of SmfDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmfDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmfDeployment.__pulumiType;
    }

    /**
     * Reference to cluster where the Network Function is deployed
     */
    public readonly clusterService!: pulumi.Output<string>;
    /**
     * Azure for Operators 5G Core SMF component parameters
     */
    public readonly componentParameters!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Operational status
     */
    public /*out*/ readonly operationalStatus!: pulumi.Output<types.outputs.OperationalStatusResponse>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Release version. This is inherited from the cluster
     */
    public /*out*/ readonly releaseVersion!: pulumi.Output<string>;
    /**
     * Azure for Operators 5G Core SMF secrets parameters
     */
    public readonly secretsParameters!: pulumi.Output<string | undefined>;
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
     * Create a SmfDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmfDeploymentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterService === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterService'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterService"] = args ? args.clusterService : undefined;
            resourceInputs["componentParameters"] = args ? args.componentParameters : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secretsParameters"] = args ? args.secretsParameters : undefined;
            resourceInputs["smfDeploymentName"] = args ? args.smfDeploymentName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationalStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["releaseVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clusterService"] = undefined /*out*/;
            resourceInputs["componentParameters"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationalStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["releaseVersion"] = undefined /*out*/;
            resourceInputs["secretsParameters"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilepacketcore/v20231015preview:SmfDeployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SmfDeployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SmfDeployment resource.
 */
export interface SmfDeploymentArgs {
    /**
     * Reference to cluster where the Network Function is deployed
     */
    clusterService: pulumi.Input<string>;
    /**
     * Azure for Operators 5G Core SMF component parameters
     */
    componentParameters?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure for Operators 5G Core SMF secrets parameters
     */
    secretsParameters?: pulumi.Input<string>;
    /**
     * The name of the SmfDeployment
     */
    smfDeploymentName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}