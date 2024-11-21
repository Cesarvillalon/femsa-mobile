
# Manejo de TypeScript en Componentes React Native

Este proyecto muestra cómo aplicar conceptos avanzados de **TypeScript** en el desarrollo de componentes con **React Native**, incluyendo el uso de **tipos genéricos**, **utility types**, **type guards** y **manejo de errores tipados**.

---

## Componentes Implementados

### 1. **List Component**
Componente para mostrar una lista de elementos. Utiliza tipos genéricos y `Readonly` para garantizar inmutabilidad.

#### **Características**:
- **Tipos Genéricos**: Permite manejar listas de cualquier tipo de dato.
- **Utility Types**: Usa `Readonly` para asegurar que los datos pasados como `props` sean inmutables.
- **Filtro Tipado**: Filtra elementos de tipo `string` de una lista con seguridad de tipos.
- **Manejo de Errores**: Garantiza la tipificación segura para listas vacías.

#### **Código de Ejemplo**:
```tsx
import React from "react";
import { Text, View, FlatList } from "react-native";

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Props<T> = {
  items: Array<ReadOnly<T>>;
  filter?: (item: T) => boolean;
};

const filterStrings = (items: Array<unknown>): Array<string> => {
  return items.filter((item): item is string => typeof item === "string");
};

const List = <T,>({ items }: Props<T>) => {
  return items.length > 0 ? (
    <View>
      <FlatList
        data={filterStrings(items)}
        renderItem={({ item }) => <Text>{String(item)}</Text>}
      />
    </View>
  ) : null;
};

export default List;
```

---

### 2. **Button Component**
Botón reutilizable con variantes y soporte para propiedades opcionales.

#### **Características**:
- **Tipos Genéricos**: Permite que el valor del botón (`value`) sea de cualquier tipo.
- **Utility Types**: Usa `Partial` para definir propiedades opcionales (`onClick`, `disabled`, `variant`).
- **Validación de Variantes**: Garantiza que la variante (`variant`) sea válida usando `type guards`.
- **Estilos Dinámicos**: Cambia el estilo en función de si el botón está deshabilitado.

#### **Código de Ejemplo**:
```tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Variants = "primary" | "secondary" | "tertiary";

type ButtonProps<T> = {
  value: T;
} & Partial<{
  onClick: () => void;
  disabled: boolean;
  variant: Variants;
}>;

const Button = <T,>({ value, onClick, disabled, variant }: ButtonProps<T>) => {
  const isValidVariant = (variant: Variants | undefined): variant is Variants => {
    return ["primary", "secondary", "tertiary"].includes(variant || "");
  };

  if (!isValidVariant(variant)) {
    throw new Error("Invalid variant");
  }

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onClick}
      disabled={disabled}
    >
      <Text style={styles.text}>{String(value)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "gray",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;
```

---

### 3. **InputField Component**
Campo de texto reutilizable con manejo de errores y valores iniciales.

#### **Características**:
- **Propiedades Opcionales**: `onChange` y `disabled` son opcionales.
- **Type Guards**: Convierte valores numéricos a cadenas con validación tipada.
- **Manejo de Errores**: Detecta y muestra errores relacionados con la longitud del texto.
- **Estado Interno**: Usa `useState` para manejar el valor y el mensaje de error.

#### **Código de Ejemplo**:
```tsx
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

type ErrorType = "minLength" | "maxLength";

type Props = {
  initialValue: string | number;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const getInitialValue = (value: string | number): string => {
  return typeof value === "number" ? value.toString() : value;
};

const getErrorMessage = (value: string, error: ErrorType): string => {
  switch (error) {
    case "minLength":
      return `The value "${value}" is too short`;
    case "maxLength":
      return `The value "${value}" is too long`;
    default:
      return "Invalid value";
  }
};

const InputField = ({ initialValue, onChange, disabled }: Props) => {
  const [value, setValue] = useState<string>(getInitialValue(initialValue));
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (value: string) => {
    if (value.length < 5) {
      setErrorMessage(getErrorMessage(value, "minLength"));
    } else {
      setErrorMessage("");
    }
    setValue(value);
    onChange?.(value);
  };

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={handleChange}
        editable={!disabled}
      />
      <Text>{errorMessage}</Text>
    </View>
  );
};

export default InputField;
```

---

## Conceptos Aplicados
1. **Genéricos**: Usados para crear componentes reutilizables y flexibles.
2. **Utility Types**: Uso de `Readonly` y `Partial` para manipular propiedades de tipos.
3. **Type Guards**: Validaciones personalizadas para garantizar la seguridad de tipos.
4. **Manejo de Errores Tipados**: Validación de propiedades y datos con mensajes personalizados.
5. **Estilos en React Native**: Implementación de estilos condicionales y dinámicos.

---

## Instalación
1. Clona este repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto:
   ```bash
   npm start
   ```

---

## Licencia
Este proyecto está bajo la Licencia MIT.
