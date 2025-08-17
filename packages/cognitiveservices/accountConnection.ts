import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Connection base resource schema.
 *
 * Uses Azure REST API version 2025-04-01-preview.
 *
 * Other available API versions: 2025-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AccountConnection extends pulumi.CustomResource {
    /**
     * Get an existing AccountConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccountConnection {
        return new AccountConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cognitiveservices:AccountConnection';

    /**
     * Returns true if the given object is an instance of AccountConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Connection property base schema.
     */
    public readonly properties!: pulumi.Output<types.outputs.AADAuthTypeConnectionPropertiesResponse | types.outputs.AccessKeyAuthTypeConnectionPropertiesResponse | types.outputs.AccountKeyAuthTypeConnectionPropertiesResponse | types.outputs.ApiKeyAuthConnectionPropertiesResponse | types.outputs.CustomKeysConnectionPropertiesResponse | types.outputs.ManagedIdentityAuthTypeConnectionPropertiesResponse | types.outputs.NoneAuthTypeConnectionPropertiesResponse | types.outputs.OAuth2AuthTypeConnectionPropertiesResponse | types.outputs.PATAuthTypeConnectionPropertiesResponse | types.outputs.SASAuthTypeConnectionPropertiesResponse | types.outputs.ServicePrincipalAuthTypeConnectionPropertiesResponse | types.outputs.UsernamePasswordAuthTypeConnectionPropertiesResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccountConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices/v20250401preview:AccountConnection" }, { type: "azure-native:cognitiveservices/v20250601:AccountConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccountConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccountConnection resource.
 */
export interface AccountConnectionArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Friendly name of the connection
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Connection property base schema.
     */
    properties: pulumi.Input<types.inputs.AADAuthTypeConnectionPropertiesArgs | types.inputs.AccessKeyAuthTypeConnectionPropertiesArgs | types.inputs.AccountKeyAuthTypeConnectionPropertiesArgs | types.inputs.ApiKeyAuthConnectionPropertiesArgs | types.inputs.CustomKeysConnectionPropertiesArgs | types.inputs.ManagedIdentityAuthTypeConnectionPropertiesArgs | types.inputs.NoneAuthTypeConnectionPropertiesArgs | types.inputs.OAuth2AuthTypeConnectionPropertiesArgs | types.inputs.PATAuthTypeConnectionPropertiesArgs | types.inputs.SASAuthTypeConnectionPropertiesArgs | types.inputs.ServicePrincipalAuthTypeConnectionPropertiesArgs | types.inputs.UsernamePasswordAuthTypeConnectionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}