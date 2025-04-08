import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The Connection Monitor Test class.
 *
 * Uses Azure REST API version 2022-10-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 */
export class ConnectionMonitorTest extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionMonitorTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionMonitorTest {
        return new ConnectionMonitorTest(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering:ConnectionMonitorTest';

    /**
     * Returns true if the given object is an instance of ConnectionMonitorTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionMonitorTest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionMonitorTest.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Connection Monitor test destination
     */
    public readonly destination!: pulumi.Output<string | undefined>;
    /**
     * The Connection Monitor test destination port
     */
    public readonly destinationPort!: pulumi.Output<number | undefined>;
    /**
     * The flag that indicates if the Connection Monitor test is successful or not.
     */
    public /*out*/ readonly isTestSuccessful!: pulumi.Output<boolean>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The path representing the Connection Monitor test.
     */
    public /*out*/ readonly path!: pulumi.Output<string[]>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Connection Monitor test source agent
     */
    public readonly sourceAgent!: pulumi.Output<string | undefined>;
    /**
     * The Connection Monitor test frequency in seconds
     */
    public readonly testFrequencyInSec!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectionMonitorTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionMonitorTestArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.peeringServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectionMonitorTestName"] = args ? args.connectionMonitorTestName : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["destinationPort"] = args ? args.destinationPort : undefined;
            resourceInputs["peeringServiceName"] = args ? args.peeringServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceAgent"] = args ? args.sourceAgent : undefined;
            resourceInputs["testFrequencyInSec"] = args ? args.testFrequencyInSec : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["isTestSuccessful"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["destinationPort"] = undefined /*out*/;
            resourceInputs["isTestSuccessful"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceAgent"] = undefined /*out*/;
            resourceInputs["testFrequencyInSec"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering/v20210601:ConnectionMonitorTest" }, { type: "azure-native:peering/v20220101:ConnectionMonitorTest" }, { type: "azure-native:peering/v20220601:ConnectionMonitorTest" }, { type: "azure-native:peering/v20221001:ConnectionMonitorTest" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectionMonitorTest.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectionMonitorTest resource.
 */
export interface ConnectionMonitorTestArgs {
    /**
     * The name of the connection monitor test
     */
    connectionMonitorTestName?: pulumi.Input<string>;
    /**
     * The Connection Monitor test destination
     */
    destination?: pulumi.Input<string>;
    /**
     * The Connection Monitor test destination port
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * The name of the peering service.
     */
    peeringServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Connection Monitor test source agent
     */
    sourceAgent?: pulumi.Input<string>;
    /**
     * The Connection Monitor test frequency in seconds
     */
    testFrequencyInSec?: pulumi.Input<number>;
}