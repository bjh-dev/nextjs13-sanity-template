import { Avatar, Card, Flex, Grid, Stack, Text, TextInput } from '@sanity/ui'
import React, { useCallback } from 'react'
import { set, StringInputProps, unset } from 'sanity'

export function colourHexValidator(value?: string) {
  if (value && !value.match(/^#[a-fA-f0-9]{6}$/)) {
    return 'Colour must be a valid hex (e.g. #A4F23B)'
  }
  return true
}

type ColourCircleProps = {
  colourName: string
  hex: string
  withColourName: boolean
  onClickHandler: (hex: string) => void
}

function ColourCircle({
  colourName,
  hex,
  withColourName,
  onClickHandler,
}: ColourCircleProps) {
  return (
    <Card padding={2}>
      <button
        type="button"
        style={{
          padding: '4px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onClick={() => onClickHandler(hex)}
      >
        <Avatar
          size={1}
          style={{
            backgroundColor: hex,
            margin: '0 auto',
          }}
        />
      </button>
      {withColourName && (
        <Text size={1} align="center" style={{ marginTop: '.5em' }}>
          {colourName}
        </Text>
      )}
    </Card>
  )
}

type ColourObject = {
  title: string
  value: string
}

type ColourSelectorProps = StringInputProps &
  (
    | {
        list: ColourObject[]
        withColourNames?: boolean
        withHexInput?: boolean
      }
    | {
        list?: never
        withColourNames?: never
        withHexInput: true
      }
  )

function ColourSelector({
  value = '',
  onChange,
  list,
  withHexInput,
  withColourNames,
}: ColourSelectorProps) {
  // Removes non-hex chars from the string, trims to 6 chars,
  // adds a # at the beginning and upper cases it
  const preprocessValue = (str: string) => {
    const validHexChars = /[0-9a-fA-F]/g
    const hexChars = str.match(validHexChars)?.join('') || ''

    const hasHashSymbol = hexChars.startsWith('#')

    return (
      (hasHashSymbol ? '' : '#') +
      hexChars.replace(/^#/, '').substring(0, 6).toUpperCase()
    )
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(
        event.currentTarget.value
          ? set(preprocessValue(event.currentTarget.value))
          : unset()
      ),
    [onChange]
  )

  const handleSelect = useCallback(
    (hex: string) =>
      onChange(hex && hex !== value ? set(preprocessValue(hex)) : unset()),
    [onChange, value]
  )

  return (
    <Stack space={3}>
      {withHexInput && (
        <>
          <Text size={1}>Enter hex</Text>
          <Grid
            columns={2}
            gap={1}
            style={{
              gridTemplateColumns: 'auto 1fr',
            }}
          >
            <Avatar
              size={1}
              style={{
                backgroundColor: value,
                border: '1px solid var(--card-hairline-soft-colour)',
              }}
            />
            <TextInput
              style={{ flexGrow: 1 }}
              fontSize={1}
              padding={3}
              placeholder="#FFFFFF"
              onChange={handleChange}
              value={value}
            />
          </Grid>
        </>
      )}
      {list && (
        <Card
          borderTop={withHexInput}
          paddingTop={withHexInput ? 3 : 0}
          style={{
            transform: 'translateX(-4px)',
          }}
        >
          {withHexInput && (
            <Text size={1} style={{ marginBottom: '.5em' }}>
              or select colour below
            </Text>
          )}
          <Flex direction="row" justify="space-between" wrap="wrap">
            {list.map((colourItem) => {
              return (
                <ColourCircle
                  key={colourItem.value}
                  colourName={colourItem.title}
                  hex={colourItem.value}
                  // active={colourItem.value === value}
                  withColourName={!!withColourNames}
                  onClickHandler={handleSelect}
                />
              )
            })}
          </Flex>
        </Card>
      )}
    </Stack>
  )
}

export default ColourSelector
