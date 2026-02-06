import type { FieldApi } from '@tanstack/react-form'

export function FieldInfo({ field }: { field: any }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="text-[0.8rem] font-medium text-destructive">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
      {field.state.meta.isValidating ? (
        <p className="text-[0.8rem] text-muted-foreground">Validating...</p>
      ) : null}
    </>
  )
}
