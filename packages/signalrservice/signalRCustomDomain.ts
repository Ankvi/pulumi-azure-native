import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A custom domain
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native signalrservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SignalRCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing SignalRCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SignalRCustomDomain {
        return new SignalRCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:signalrservice:SignalRCustomDomain';

    /**
     * Returns true if the given object is an instance of SignalRCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SignalRCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SignalRCustomDomain.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Reference to a resource.
     */
    public readonly customCertificate!: pulumi.Output<types.outputs.ResourceReferenceResponse>;
    /**
     * The custom domain name.
     */
    public readonly domainName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SignalRCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignalRCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.customCertificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customCertificate'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["customCertificate"] = args ? args.customCertificate : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customCertificate"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:signalrservice/v20220201:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20220801preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20230201:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20230301preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20230601preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20230801preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20240101preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20240301:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20240401preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20240801preview:SignalRCustomDomain" }, { type: "azure-native:signalrservice/v20241001preview:SignalRCustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SignalRCustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SignalRCustomDomain resource.
 */
export interface SignalRCustomDomainArgs {
    /**
     * Reference to a resource.
     */
    customCertificate: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * The custom domain name.
     */
    domainName: pulumi.Input<string>;
    /**
     * Custom domain name.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}