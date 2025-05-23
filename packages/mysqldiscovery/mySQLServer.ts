import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The MySQLServer resource definition.
 *
 * Uses Azure REST API version 2024-09-30-preview. In version 2.x of the Azure Native provider, it used API version 2024-09-30-preview.
 */
export class MySQLServer extends pulumi.CustomResource {
    /**
     * Get an existing MySQLServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MySQLServer {
        return new MySQLServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mysqldiscovery:MySQLServer';

    /**
     * Returns true if the given object is an instance of MySQLServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MySQLServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MySQLServer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * mysql server edition.
     */
    public readonly edition!: pulumi.Output<string | undefined>;
    /**
     * The list of errors.
     */
    public readonly errors!: pulumi.Output<types.outputs.ErrorResponse[] | undefined>;
    /**
     * The Server IP/host name.
     */
    public readonly hostIp!: pulumi.Output<string[] | undefined>;
    /**
     * The Server IP/host name.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * Resource labels.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * discovery Machine Id
     */
    public readonly machineId!: pulumi.Output<string | undefined>;
    /**
     * The mysql server version.
     */
    public readonly mysqlVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of database.
     */
    public readonly numberOfDatabase!: pulumi.Output<number | undefined>;
    /**
     * MySQL Server port number
     */
    public readonly portNumber!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Time when mysql version support end.
     */
    public readonly supportEndIn!: pulumi.Output<string | undefined>;
    /**
     * mysql version support status.
     */
    public readonly supportStatus!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MySQLServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MySQLServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.portNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portNumber'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["errors"] = args ? args.errors : undefined;
            resourceInputs["hostIp"] = args ? args.hostIp : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["machineId"] = args ? args.machineId : undefined;
            resourceInputs["mysqlVersion"] = args ? args.mysqlVersion : undefined;
            resourceInputs["numberOfDatabase"] = args ? args.numberOfDatabase : undefined;
            resourceInputs["portNumber"] = args ? args.portNumber : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["supportEndIn"] = args ? args.supportEndIn : undefined;
            resourceInputs["supportStatus"] = args ? args.supportStatus : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["edition"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["hostIp"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["machineId"] = undefined /*out*/;
            resourceInputs["mysqlVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfDatabase"] = undefined /*out*/;
            resourceInputs["portNumber"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["supportEndIn"] = undefined /*out*/;
            resourceInputs["supportStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mysqldiscovery/v20240930preview:MySQLServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MySQLServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MySQLServer resource.
 */
export interface MySQLServerArgs {
    /**
     * mysql server edition.
     */
    edition?: pulumi.Input<string | types.enums.Edition>;
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<types.inputs.ErrorArgs>[]>;
    /**
     * The Server IP/host name.
     */
    hostIp?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Server IP/host name.
     */
    hostName: pulumi.Input<string>;
    /**
     * Resource labels.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * discovery Machine Id
     */
    machineId?: pulumi.Input<string>;
    /**
     * The mysql server version.
     */
    mysqlVersion?: pulumi.Input<string>;
    /**
     * The number of database.
     */
    numberOfDatabase?: pulumi.Input<number>;
    /**
     * MySQL Server port number
     */
    portNumber: pulumi.Input<string>;
    /**
     * Gets or sets the provisioning state.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of Server
     */
    serverName?: pulumi.Input<string>;
    /**
     * The name of Site
     */
    siteName: pulumi.Input<string>;
    /**
     * Time when mysql version support end.
     */
    supportEndIn?: pulumi.Input<string>;
    /**
     * mysql version support status.
     */
    supportStatus?: pulumi.Input<string | types.enums.SupportStatus>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}