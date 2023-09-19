import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The command used in the test
     */
    export interface CommandArgs {
        /**
         * The action of the command.
         */
        action: pulumi.Input<string | enums.Action>;
        /**
         * Specifies whether to run the command even if a previous command is failed.
         */
        alwaysRun?: pulumi.Input<boolean>;
        /**
         * Specifies whether to apply update before the command.
         */
        applyUpdateBefore?: pulumi.Input<boolean>;
        /**
         * The content of the command. The content depends on source type.
         */
        content: pulumi.Input<string>;
        /**
         * The type of command content.
         */
        contentType: pulumi.Input<string | enums.ContentType>;
        /**
         * Specifies the max run time of the command.
         */
        maxRunTime?: pulumi.Input<number>;
        /**
         * The name of the command.
         */
        name: pulumi.Input<string>;
        /**
         * Specifies whether to restart the VM after the command executed.
         */
        restartAfter?: pulumi.Input<boolean>;
        /**
         * Specifies whether to run the command in interactive mode.
         */
        runAsInteractive?: pulumi.Input<boolean>;
        /**
         * Specifies whether to run the command as administrator.
         */
        runElevated?: pulumi.Input<boolean>;
    }

    /**
     * The user object receiver value.
     */
    export interface DistributionGroupListReceiverValueArgs {
        /**
         * The list of distribution groups.
         */
        distributionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * A notification event receivers.
     */
    export interface NotificationEventReceiverArgs {
        /**
         * The type of the notification event receiver.
         */
        receiverType?: pulumi.Input<string>;
        /**
         * The notification event receiver value.
         */
        receiverValue?: pulumi.Input<NotificationReceiverValueArgs>;
    }

    /**
     * A notification event receiver value.
     */
    export interface NotificationReceiverValueArgs {
        /**
         * The user object receiver value.
         */
        distributionGroupListReceiverValue?: pulumi.Input<DistributionGroupListReceiverValueArgs>;
        /**
         * The user object receiver value.
         */
        subscriptionReceiverValue?: pulumi.Input<SubscriptionReceiverValueArgs>;
        /**
         * The user object receiver value.
         */
        userObjectReceiverValue?: pulumi.Input<UserObjectReceiverValueArgs>;
    }

    /**
     * The subscription role receiver value.
     */
    export interface SubscriptionReceiverValueArgs {
        /**
         * The role of the notification receiver.
         */
        role?: pulumi.Input<string>;
        /**
         * The subscription id of the notification receiver.
         */
        subscriptionId?: pulumi.Input<string>;
        /**
         * The subscription name of the notification receiver.
         */
        subscriptionName?: pulumi.Input<string>;
    }

    /**
     * The information of the target OS to be tested.
     */
    export interface TargetOSInfoArgs {
        /**
         * Specifies the baseline OSs to be tested.
         */
        baselineOSs?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
         */
        osUpdateType: pulumi.Input<string>;
        /**
         * Specifies the target OSs to be tested.
         */
        targetOSs: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The definition of a Test.
     */
    export interface TestArgs {
        /**
         * The commands used in the test.
         */
        commands: pulumi.Input<pulumi.Input<CommandArgs>[]>;
        /**
         * Indicates if this test is active.It doesn't schedule test for not active Test.
         */
        isActive?: pulumi.Input<boolean>;
        /**
         * The type of the test.
         */
        testType: pulumi.Input<string | enums.TestType>;
    }

    /**
     * Describes a Test Base Account SKU.
     */
    export interface TestBaseAccountSKUArgs {
        /**
         * The locations that the SKU is available.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the SKU. This is typically a letter + number code, such as B0 or S0.
         */
        name: pulumi.Input<string>;
        /**
         * The type of resource the SKU applies to.
         */
        resourceType?: pulumi.Input<string>;
        /**
         * The tier of this particular SKU.
         */
        tier: pulumi.Input<string | enums.Tier>;
    }

    /**
     * The user object receiver value.
     */
    export interface UserObjectReceiverValueArgs {
        /**
         * user object ids.
         */
        userObjectIds?: pulumi.Input<pulumi.Input<string>[]>;
    }
