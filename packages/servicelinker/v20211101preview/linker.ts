import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Linker of source and target resource
 */
export class Linker extends pulumi.CustomResource {
    /**
     * Get an existing Linker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Linker {
        return new Linker(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicelinker/v20211101preview:Linker';

    /**
     * Returns true if the given object is an instance of Linker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Linker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Linker.__pulumiType;
    }

    /**
     * The authentication type.
     */
    public readonly authInfo!: pulumi.Output<types.outputs.servicelinker.v20211101preview.SecretAuthInfoResponse | types.outputs.servicelinker.v20211101preview.ServicePrincipalCertificateAuthInfoResponse | types.outputs.servicelinker.v20211101preview.ServicePrincipalSecretAuthInfoResponse | types.outputs.servicelinker.v20211101preview.SystemAssignedIdentityAuthInfoResponse | types.outputs.servicelinker.v20211101preview.UserAssignedIdentityAuthInfoResponse | undefined>;
    /**
     * The application client type
     */
    public readonly clientType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state. 
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * An option to store secret value in secure place
     */
    public readonly secretStore!: pulumi.Output<types.outputs.servicelinker.v20211101preview.SecretStoreResponse | undefined>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.servicelinker.v20211101preview.SystemDataResponse>;
    /**
     * The resource Id of target service.
     */
    public readonly targetId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VNet solution.
     */
    public readonly vNetSolution!: pulumi.Output<types.outputs.servicelinker.v20211101preview.VNetSolutionResponse | undefined>;

    /**
     * Create a Linker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["authInfo"] = args ? args.authInfo : undefined;
            resourceInputs["clientType"] = args ? args.clientType : undefined;
            resourceInputs["linkerName"] = args ? args.linkerName : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["secretStore"] = args ? args.secretStore : undefined;
            resourceInputs["targetId"] = args ? args.targetId : undefined;
            resourceInputs["vNetSolution"] = args ? args.vNetSolution : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authInfo"] = undefined /*out*/;
            resourceInputs["clientType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["secretStore"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vNetSolution"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicelinker:Linker" }, { type: "azure-native:servicelinker/v20220101preview:Linker" }, { type: "azure-native:servicelinker/v20220501:Linker" }, { type: "azure-native:servicelinker/v20221101preview:Linker" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Linker.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Linker resource.
 */
export interface LinkerArgs {
    /**
     * The authentication type.
     */
    authInfo?: pulumi.Input<types.inputs.servicelinker.v20211101preview.SecretAuthInfoArgs | types.inputs.servicelinker.v20211101preview.ServicePrincipalCertificateAuthInfoArgs | types.inputs.servicelinker.v20211101preview.ServicePrincipalSecretAuthInfoArgs | types.inputs.servicelinker.v20211101preview.SystemAssignedIdentityAuthInfoArgs | types.inputs.servicelinker.v20211101preview.UserAssignedIdentityAuthInfoArgs>;
    /**
     * The application client type
     */
    clientType?: pulumi.Input<string | types.enums.v20211101preview.ClientType>;
    /**
     * The name Linker resource.
     */
    linkerName?: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * An option to store secret value in secure place
     */
    secretStore?: pulumi.Input<types.inputs.servicelinker.v20211101preview.SecretStoreArgs>;
    /**
     * The resource Id of target service.
     */
    targetId?: pulumi.Input<string>;
    /**
     * The VNet solution.
     */
    vNetSolution?: pulumi.Input<types.inputs.servicelinker.v20211101preview.VNetSolutionArgs>;
}
