import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Programmable Connectivity Operator API Connection resource
 *
 * Uses Azure REST API version 2024-01-15-preview. In version 2.x of the Azure Native provider, it used API version 2024-01-15-preview.
 */
export class OperatorApiConnection extends pulumi.CustomResource {
    /**
     * Get an existing OperatorApiConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OperatorApiConnection {
        return new OperatorApiConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:programmableconnectivity:OperatorApiConnection';

    /**
     * Returns true if the given object is an instance of OperatorApiConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OperatorApiConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OperatorApiConnection.__pulumiType;
    }

    /**
     * Type of the account the user has with the Operator's Network API infrastructure. AzureManaged | UserManaged.
     */
    public readonly accountType!: pulumi.Output<string>;
    /**
     * Application ID of the App Developer that is registered with the Operator in a specific country/region.
     */
    public readonly appId!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Network API for the current operator in the country/region provided in the linked Operator API Plan.
     */
    public /*out*/ readonly camaraApiName!: pulumi.Output<string>;
    /**
     * Details about the Application that would use the Operator's Network APIs.
     */
    public readonly configuredApplication!: pulumi.Output<types.outputs.ApplicationPropertiesResponse | undefined>;
    /**
     * Reference to the APC Gateway resource ID.
     */
    public readonly gatewayId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Reference to the Operator API Plan Resource ID.
     */
    public readonly operatorApiPlanId!: pulumi.Output<string>;
    /**
     * Name of the Operator in the linked Operator API Plan belongs to.
     */
    public /*out*/ readonly operatorName!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Details about the SaaS offer purchased from the marketplace.
     */
    public readonly saasProperties!: pulumi.Output<types.outputs.SaasPropertiesResponse | undefined>;
    /**
     * The status of the OperatorApiConnection resource.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.StatusResponse>;
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
     * Create a OperatorApiConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OperatorApiConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountType'");
            }
            if ((!args || args.gatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayId'");
            }
            if ((!args || args.operatorApiPlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operatorApiPlanId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountType"] = args ? args.accountType : undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["appSecret"] = args ? args.appSecret : undefined;
            resourceInputs["configuredApplication"] = args ? args.configuredApplication : undefined;
            resourceInputs["gatewayId"] = args ? args.gatewayId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["operatorApiConnectionName"] = args ? args.operatorApiConnectionName : undefined;
            resourceInputs["operatorApiPlanId"] = args ? args.operatorApiPlanId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["saasProperties"] = args ? args.saasProperties : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["camaraApiName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operatorName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountType"] = undefined /*out*/;
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["camaraApiName"] = undefined /*out*/;
            resourceInputs["configuredApplication"] = undefined /*out*/;
            resourceInputs["gatewayId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operatorApiPlanId"] = undefined /*out*/;
            resourceInputs["operatorName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["saasProperties"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:programmableconnectivity/v20240115preview:OperatorApiConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OperatorApiConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OperatorApiConnection resource.
 */
export interface OperatorApiConnectionArgs {
    /**
     * Type of the account the user has with the Operator's Network API infrastructure. AzureManaged | UserManaged.
     */
    accountType: pulumi.Input<string | types.enums.AccountType>;
    /**
     * Application ID of the App Developer that is registered with the Operator in a specific country/region.
     */
    appId?: pulumi.Input<string>;
    /**
     * Application secret linked to the 'appId'. This should be stored securely and is not returned back when the resource information is read.
     */
    appSecret?: pulumi.Input<string>;
    /**
     * Details about the Application that would use the Operator's Network APIs.
     */
    configuredApplication?: pulumi.Input<types.inputs.ApplicationPropertiesArgs>;
    /**
     * Reference to the APC Gateway resource ID.
     */
    gatewayId: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Azure Programmable Connectivity (APC) Operator API Connection Name.
     */
    operatorApiConnectionName?: pulumi.Input<string>;
    /**
     * Reference to the Operator API Plan Resource ID.
     */
    operatorApiPlanId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Details about the SaaS offer purchased from the marketplace.
     */
    saasProperties?: pulumi.Input<types.inputs.SaasPropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}