import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The supported kubernetes versions.
 */
export class KubernetesVersions extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesVersions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KubernetesVersions {
        return new KubernetesVersions(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice/v20231115preview:KubernetesVersions';

    /**
     * Returns true if the given object is an instance of KubernetesVersions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesVersions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesVersions.__pulumiType;
    }

    /**
     * Extended Location definition
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.KubernetesVersionProfileResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KubernetesVersions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesVersionsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.customLocationResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'customLocationResourceUri'");
            }
            resourceInputs["customLocationResourceUri"] = args ? args.customLocationResourceUri : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20240101:KubernetesVersions" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KubernetesVersions.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KubernetesVersions resource.
 */
export interface KubernetesVersionsArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the custom location resource.
     */
    customLocationResourceUri: pulumi.Input<string>;
    /**
     * Extended Location definition
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
}