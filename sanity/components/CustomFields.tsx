/* eslint-disable react/destructuring-assignment */
// sanity/components/CustomFields.tsx

import { Stack, Text } from "@sanity/ui";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CharacterCounterField(props: any) {
    return (
        <Stack space={3}>
            {props.renderDefault(props)}
            <Text size={1} onResize={undefined} onResizeCapture={undefined}>
                Characters: {props.value?.length || 0}.{" "}
            </Text>
        </Stack>
    );
}
