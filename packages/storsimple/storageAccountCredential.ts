import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The storage account credential.
 * Azure REST API version: 2017-06-01. Prior API version in Azure Native 1.x: 2017-06-01.
 *
 * Other available API versions: 2016-10-01.
 */
export class StorageAccountCredential extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccountCredential {
        return new StorageAccountCredential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:StorageAccountCredential';

    /**
     * Returns true if the given object is an instance of StorageAccountCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccountCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccountCredential.__pulumiType;
    }

    /**
     * The details of the storage account password.
     */
    public readonly accessKey!: pulumi.Output<types.outputs.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The storage endpoint
     */
    public readonly endPoint!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    public readonly sslStatus!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The count of volumes using this storage account credential.
     */
    public /*out*/ readonly volumesCount!: pulumi.Output<number>;

    /**
     * Create a StorageAccountCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountCredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endPoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endPoint'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sslStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sslStatus'");
            }
            resourceInputs["accessKey"] = args ? args.accessKey : undefined;
            resourceInputs["endPoint"] = args ? args.endPoint : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sslStatus"] = args ? args.sslStatus : undefined;
            resourceInputs["storageAccountCredentialName"] = args ? args.storageAccountCredentialName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumesCount"] = undefined /*out*/;
        } else {
            resourceInputs["accessKey"] = undefined /*out*/;
            resourceInputs["endPoint"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sslStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumesCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20161001:StorageAccountCredential" }, { type: "azure-native:storsimple/v20170601:StorageAccountCredential" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageAccountCredential.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccountCredential resource.
 */
export interface StorageAccountCredentialArgs {
    /**
     * The details of the storage account password.
     */
    accessKey?: pulumi.Input<types.inputs.AsymmetricEncryptedSecretArgs>;
    /**
     * The storage endpoint
     */
    endPoint: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    sslStatus: pulumi.Input<types.enums.SslStatus>;
    /**
     * The storage account credential name.
     */
    storageAccountCredentialName?: pulumi.Input<string>;
}
