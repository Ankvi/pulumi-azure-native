import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The extended info of the manager.
 *
 * Uses Azure REST API version 2017-06-01. In version 2.x of the Azure Native provider, it used API version 2017-06-01.
 */
export class ManagerExtendedInfo extends pulumi.CustomResource {
    /**
     * Get an existing ManagerExtendedInfo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagerExtendedInfo {
        return new ManagerExtendedInfo(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:ManagerExtendedInfo';

    /**
     * Returns true if the given object is an instance of ManagerExtendedInfo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagerExtendedInfo {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagerExtendedInfo.__pulumiType;
    }

    /**
     * Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
     */
    public readonly algorithm!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Represents the CEK of the resource.
     */
    public readonly encryptionKey!: pulumi.Output<string | undefined>;
    /**
     * Represents the Cert thumbprint that was used to encrypt the CEK.
     */
    public readonly encryptionKeyThumbprint!: pulumi.Output<string | undefined>;
    /**
     * The etag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Represents the CIK of the resource.
     */
    public readonly integrityKey!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
     */
    public readonly portalCertificateThumbprint!: pulumi.Output<string | undefined>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the extended info being persisted.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagerExtendedInfo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagerExtendedInfoArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.algorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'algorithm'");
            }
            if ((!args || args.integrityKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrityKey'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["encryptionKey"] = args ? args.encryptionKey : undefined;
            resourceInputs["encryptionKeyThumbprint"] = args ? args.encryptionKeyThumbprint : undefined;
            resourceInputs["integrityKey"] = args ? args.integrityKey : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["portalCertificateThumbprint"] = args ? args.portalCertificateThumbprint : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["algorithm"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["encryptionKey"] = undefined /*out*/;
            resourceInputs["encryptionKeyThumbprint"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["integrityKey"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["portalCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20161001:ManagerExtendedInfo" }, { type: "azure-native:storsimple/v20170601:ManagerExtendedInfo" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagerExtendedInfo.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagerExtendedInfo resource.
 */
export interface ManagerExtendedInfoArgs {
    /**
     * Represents the encryption algorithm used to encrypt the keys. None - if Key is saved in plain text format. Algorithm name - if key is encrypted
     */
    algorithm: pulumi.Input<string>;
    /**
     * Represents the CEK of the resource.
     */
    encryptionKey?: pulumi.Input<string>;
    /**
     * Represents the Cert thumbprint that was used to encrypt the CEK.
     */
    encryptionKeyThumbprint?: pulumi.Input<string>;
    /**
     * Represents the CIK of the resource.
     */
    integrityKey: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it.
     */
    portalCertificateThumbprint?: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The version of the extended info being persisted.
     */
    version?: pulumi.Input<string>;
}