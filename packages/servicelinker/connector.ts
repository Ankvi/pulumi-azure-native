import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Linker of source and target resource
 * Azure REST API version: 2022-11-01-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2024-04-01, 2024-07-01-preview.
 */
export class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector {
        return new Connector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicelinker:Connector';

    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connector.__pulumiType;
    }

    /**
     * The authentication type.
     */
    public readonly authInfo!: pulumi.Output<types.outputs.AccessKeyInfoBaseResponse | types.outputs.SecretAuthInfoResponse | types.outputs.ServicePrincipalCertificateAuthInfoResponse | types.outputs.ServicePrincipalSecretAuthInfoResponse | types.outputs.SystemAssignedIdentityAuthInfoResponse | types.outputs.UserAccountAuthInfoResponse | types.outputs.UserAssignedIdentityAuthInfoResponse | undefined>;
    /**
     * The application client type
     */
    public readonly clientType!: pulumi.Output<string | undefined>;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    public readonly configurationInfo!: pulumi.Output<types.outputs.ConfigurationInfoResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state. 
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The network solution.
     */
    public readonly publicNetworkSolution!: pulumi.Output<types.outputs.PublicNetworkSolutionResponse | undefined>;
    /**
     * connection scope in source service.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * An option to store secret value in secure place
     */
    public readonly secretStore!: pulumi.Output<types.outputs.SecretStoreResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The target service properties
     */
    public readonly targetService!: pulumi.Output<types.outputs.AzureResourceResponse | types.outputs.ConfluentBootstrapServerResponse | types.outputs.ConfluentSchemaRegistryResponse | types.outputs.SelfHostedServerResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VNet solution.
     */
    public readonly vNetSolution!: pulumi.Output<types.outputs.VNetSolutionResponse | undefined>;

    /**
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authInfo"] = args ? args.authInfo : undefined;
            resourceInputs["clientType"] = args ? args.clientType : undefined;
            resourceInputs["configurationInfo"] = args ? args.configurationInfo : undefined;
            resourceInputs["connectorName"] = args ? args.connectorName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkSolution"] = args ? args.publicNetworkSolution : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["secretStore"] = args ? args.secretStore : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["targetService"] = args ? args.targetService : undefined;
            resourceInputs["vNetSolution"] = args ? args.vNetSolution : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authInfo"] = undefined /*out*/;
            resourceInputs["clientType"] = undefined /*out*/;
            resourceInputs["configurationInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkSolution"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["secretStore"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetService"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vNetSolution"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicelinker/v20221101preview:Connector" }, { type: "azure-native:servicelinker/v20230401preview:Connector" }, { type: "azure-native:servicelinker/v20240401:Connector" }, { type: "azure-native:servicelinker/v20240701preview:Connector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Connector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * The authentication type.
     */
    authInfo?: pulumi.Input<types.inputs.AccessKeyInfoBaseArgs | types.inputs.SecretAuthInfoArgs | types.inputs.ServicePrincipalCertificateAuthInfoArgs | types.inputs.ServicePrincipalSecretAuthInfoArgs | types.inputs.SystemAssignedIdentityAuthInfoArgs | types.inputs.UserAccountAuthInfoArgs | types.inputs.UserAssignedIdentityAuthInfoArgs>;
    /**
     * The application client type
     */
    clientType?: pulumi.Input<string | types.enums.ClientType>;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    configurationInfo?: pulumi.Input<types.inputs.ConfigurationInfoArgs>;
    /**
     * The name of resource.
     */
    connectorName?: pulumi.Input<string>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The network solution.
     */
    publicNetworkSolution?: pulumi.Input<types.inputs.PublicNetworkSolutionArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * connection scope in source service.
     */
    scope?: pulumi.Input<string>;
    /**
     * An option to store secret value in secure place
     */
    secretStore?: pulumi.Input<types.inputs.SecretStoreArgs>;
    /**
     * The ID of the target subscription.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The target service properties
     */
    targetService?: pulumi.Input<types.inputs.AzureResourceArgs | types.inputs.ConfluentBootstrapServerArgs | types.inputs.ConfluentSchemaRegistryArgs | types.inputs.SelfHostedServerArgs>;
    /**
     * The VNet solution.
     */
    vNetSolution?: pulumi.Input<types.inputs.VNetSolutionArgs>;
}