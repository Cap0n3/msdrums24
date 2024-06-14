import React from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

export const TextInput = ({ field, textarea=false, register, errors }) => (
    <TextField
        variant="outlined"
        required={!!field.validation.required}
        fullWidth
        multiline={textarea}
        minRows={textarea ? 6 : ""}
        id={field.id}
        label={field.label}
        name={field.name}
        type={field.type || "text"}
        {...register(field.name, field.validation)}
        error={!!errors[field.name]} // !!errors double negation to convert msg to boolean
        helperText={errors[field.name] ? errors[field.name].message : ""}
        // For accessibility
        aria-invalid={!!errors[field.name]} 
        aria-describedby={field.name + "-error"}
        aria-required={!!field.validation.required}
        aria-errormessage={errors[field.name] ? errors[field.name].message : ""}
    />
);


export const SelectInput = ({ field, control, errors }) => (
    <FormControl required={!!field.validation.required} fullWidth>
        <InputLabel id={field.name}>{field.label}</InputLabel>
        <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={field.validation}
            render={({ field: controllerField }) => (
                <Select
                    id={field.id}
                    labelId={field.name}
                    label={field.label}
                    {...controllerField}
                    error={!!errors[field.name]}
                >
                    {field.options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
        {errors[field.name] && (
            <Typography variant="body2" color="error">
                {errors[field.name].message}
            </Typography>
        )}
    </FormControl>
);
