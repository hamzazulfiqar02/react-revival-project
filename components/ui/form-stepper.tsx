"use client"

import React, { createContext, useContext, type ReactNode } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StyleConfig {
  activeBgColor: string
  activeTextColor: string
  completedBgColor: string
  completedTextColor: string
  inactiveBgColor: string
  inactiveTextColor: string
  size: string
  borderRadius: string
  circleFontSize: string
  labelFontSize: string
  fontWeight: number
}

interface ConnectorStyleConfig {
  activeColor: string
  disabledColor: string
  completedColor: string
  size: number
  style: "solid" | "dashed" | "dotted"
}

interface FormStepperProps {
  activeStep: number
  steps: string[]
  children?: ReactNode
  className?: string
  styleConfig?: Partial<StyleConfig>
  connectorStyleConfig?: Partial<ConnectorStyleConfig>
}

// Update the StepProps interface to ensure 'active' is properly defined
interface StepProps {
  label?: ReactNode
  icon?: ReactNode
  optional?: ReactNode
  completed?: boolean
  active?: boolean
  disabled?: boolean
  error?: boolean
}

const defaultStyleConfig: StyleConfig = {
  activeBgColor: "#CB2C70",
  activeTextColor: "#ffffff",
  completedBgColor: "#CB2C70",
  completedTextColor: "#ffffff",
  inactiveBgColor: "#E0E0E7",
  inactiveTextColor: "#E0E0E7",
  size: "24px",
  borderRadius: "50%",
  circleFontSize: "12px",
  labelFontSize: "0.875rem",
  fontWeight: 500,
}

const defaultConnectorStyleConfig: ConnectorStyleConfig = {
  activeColor: "#CB2C70",
  disabledColor: "#E0E0E7",
  completedColor: "#CB2C70",
  size: 2,
  style: "solid",
}

const StepperContext = createContext<{
  activeStep: number
  styleConfig: StyleConfig
  connectorStyleConfig: ConnectorStyleConfig
}>({
  activeStep: 0,
  styleConfig: defaultStyleConfig,
  connectorStyleConfig: defaultConnectorStyleConfig,
})

export function FormStepper({
  activeStep,
  steps,
  children,
  className,
  styleConfig: styleConfigProp,
  connectorStyleConfig: connectorStyleConfigProp,
}: FormStepperProps) {
  const styleConfig = { ...defaultStyleConfig, ...styleConfigProp }
  const connectorStyleConfig = { ...defaultConnectorStyleConfig, ...connectorStyleConfigProp }

  // If children are provided, use them; otherwise, create steps from the steps array
  const stepsToRender = children
    ? React.Children.toArray(children)
    : steps.map((step, index) => <Step key={index} label={step} />)

  return (
    <StepperContext.Provider value={{ activeStep, styleConfig, connectorStyleConfig }}>
      <div className={cn("flex items-center", className)}>
        {stepsToRender.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step */}
            <div className="flex flex-col items-center">
              <StepCircle index={index} />
              {React.isValidElement(step) &&
                React.cloneElement(step as React.ReactElement<StepProps>, {
                  active: index === activeStep,
                })}
            </div>

            {/* Connector */}
            {index < stepsToRender.length - 1 && <StepConnector index={index} />}
          </React.Fragment>
        ))}
      </div>
    </StepperContext.Provider>
  )
}

function StepCircle({ index }: { index: number }) {
  const { activeStep, styleConfig } = useContext(StepperContext)
  const isCompleted = index < activeStep
  const isActive = index === activeStep

  const circleStyle = {
    width: styleConfig.size,
    height: styleConfig.size,
    borderRadius: styleConfig.borderRadius,
    fontSize: styleConfig.circleFontSize,
    fontWeight: styleConfig.fontWeight,
    backgroundColor: isCompleted
      ? styleConfig.completedBgColor
      : isActive
        ? styleConfig.activeBgColor
        : styleConfig.inactiveBgColor,
    color: isCompleted
      ? styleConfig.completedTextColor
      : isActive
        ? styleConfig.activeTextColor
        : styleConfig.inactiveTextColor,
  }

  return (
    <div className="flex items-center justify-center" style={circleStyle}>
      {isCompleted ? <Check size={12} /> : <span>{index + 1}</span>}
    </div>
  )
}

function StepConnector({ index }: { index: number }) {
  const { activeStep, connectorStyleConfig } = useContext(StepperContext)
  const isCompleted = index < activeStep

  const connectorStyle = {
    height: `${connectorStyleConfig.size}px`,
    flex: 1,
    backgroundColor: isCompleted ? connectorStyleConfig.completedColor : connectorStyleConfig.disabledColor,
    borderStyle: connectorStyleConfig.style,
  }

  return <div className="flex-1 mx-2" style={connectorStyle}></div>
}

export function Step({ label, icon, optional, active }: StepProps) {
  const { styleConfig } = useContext(StepperContext)

  const labelStyle = {
    fontSize: styleConfig.labelFontSize,
    fontWeight: styleConfig.fontWeight,
  }

  return (
    <div className="flex flex-col items-center">
      {icon && <div className="mb-1">{icon}</div>}
      {label && (
        <div className="mt-2" style={labelStyle}>
          {label}
        </div>
      )}
      {optional && <div className="text-xs text-gray-500">{optional}</div>}
    </div>
  )
}
