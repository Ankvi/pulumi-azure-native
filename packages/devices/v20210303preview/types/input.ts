import * as pulumi from "@pulumi/pulumi";
    /**
     * The EventHub consumer group name.
     */
    export interface EventHubConsumerGroupNameArgs {
        /**
         * EventHub consumer group name
         */
        name?: pulumi.Input<string>;
    }