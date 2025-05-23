import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a federated identity credential.
 *
 * Uses Azure REST API version 2023-01-31. In version 2.x of the Azure Native provider, it used API version 2023-01-31.
 *
 * Other available API versions: 2022-01-31-preview, 2023-07-31-preview, 2024-11-30, 2025-01-31-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managedidentity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FederatedIdentityCredential extends pulumi.CustomResource {
    /**
     * Get an existing FederatedIdentityCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FederatedIdentityCredential {
        return new FederatedIdentityCredential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managedidentity:FederatedIdentityCredential';

    /**
     * Returns true if the given object is an instance of FederatedIdentityCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FederatedIdentityCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FederatedIdentityCredential.__pulumiType;
    }

    /**
     * The list of audiences that can appear in the issued token.
     */
    public readonly audiences!: pulumi.Output<string[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The URL of the issuer to be trusted.
     */
    public readonly issuer!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The identifier of the external identity.
     */
    public readonly subject!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FederatedIdentityCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FederatedIdentityCredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.audiences === undefined) && !opts.urn) {
                throw new Error("Missing required property 'audiences'");
            }
            if ((!args || args.issuer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'issuer'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.subject === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subject'");
            }
            resourceInputs["audiences"] = args ? args.audiences : undefined;
            resourceInputs["federatedIdentityCredentialResourceName"] = args ? args.federatedIdentityCredentialResourceName : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["subject"] = args ? args.subject : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["audiences"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["issuer"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subject"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managedidentity/v20220131preview:FederatedIdentityCredential" }, { type: "azure-native:managedidentity/v20230131:FederatedIdentityCredential" }, { type: "azure-native:managedidentity/v20230731preview:FederatedIdentityCredential" }, { type: "azure-native:managedidentity/v20241130:FederatedIdentityCredential" }, { type: "azure-native:managedidentity/v20250131preview:FederatedIdentityCredential" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FederatedIdentityCredential.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FederatedIdentityCredential resource.
 */
export interface FederatedIdentityCredentialArgs {
    /**
     * The list of audiences that can appear in the issued token.
     */
    audiences: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the federated identity credential resource.
     */
    federatedIdentityCredentialResourceName?: pulumi.Input<string>;
    /**
     * The URL of the issuer to be trusted.
     */
    issuer: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the identity resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The identifier of the external identity.
     */
    subject: pulumi.Input<string>;
}