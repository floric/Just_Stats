import React, { SFC, ComponentClass } from 'react';
import { connect, Dispatch } from 'react-redux';
import { List } from 'immutable';
import { Card, Section, Title, Column, Columns, Subtitle, Tile, Icon, Control, Select } from 'bloomer';
import { Bar } from 'react-chartjs-2';
import { css } from 'glamor';

import { ElementCard } from './element-card';
import { StatisticsElement, ElementsCategory, ScalarData } from '../../modules/basics-module/reducer';
import * as Colors from '../../utils/colors';
import { RootStateWithRouter } from '../../index';
import { getScalarSampleData, getCurrentScalarSample } from '../../modules/basics-module/selectors';
import { setCurrentScalarSampleAction } from '../../modules/basics-module/actions';

interface MathBarDiagramProps {
  title: string;
  calculationFunction?: (values: number[]) => number;
  isExpanded?: boolean;
  isExpandable?: boolean;
  onExpandClicked?: () => void;
}

interface MathBarDiagramWithReduxProps extends MathBarDiagramProps {
  sampleData: List<ScalarData>;
  currentSample: ScalarData;
}

interface DispatchProps {
  setCurrentScalarSampleAction(newVal: string): void;
  isMobileMenuOpen: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch<MathBarDiagramProps>) => {
  return {
    setCurrentScalarSampleAction: (newVal: string) => dispatch(setCurrentScalarSampleAction(newVal))
  };
};

const mapStateToProps = (state: RootStateWithRouter, ownProps: MathBarDiagramWithReduxProps): {} => {
  const allSamples = getScalarSampleData(state);
  const currentSampleName = getCurrentScalarSample(state);

  return {
    sampleData: getScalarSampleData(state),
    currentSample: allSamples.filter((sample: ScalarData) => sample.name === currentSampleName).first()
  };
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

export const MathBarDiagram: ComponentClass<MathBarDiagramProps> = connect(mapStateToProps, mapDispatchToProps)((props) => {
  const columnColor = Colors.primary.alpha(0.5);
  const columnHoverColor = Colors.primary;

  const { isExpanded = false, isExpandable = false } = props;

  const values = props.currentSample ? props.currentSample.data : [];

  const data = {
    labels: values.map((val, index) => index),
    datasets: [{
      label: props.title,
      backgroundColor: columnColor.toString(),
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: 3,
      hoverBackgroundColor: columnHoverColor.toString(),
      hoverBorderColor: 'rgba(255,255,255,1)',
      data: values
    }]
  };

  const value = props.calculationFunction ? props.calculationFunction(values) : 0;

  return (
    <div {...css({ backgroundColor: Colors.backgroundLight.toString(), padding: '2rem', color: Colors.textDark.toString() })}>
      <Control>
        Select sample: <Select onChange={(a: any) => props.setCurrentScalarSampleAction(a.target.value)}>
          {props.sampleData.map((sample: ScalarData) =>
            <option value={sample.name} key={sample.name}>{sample.readableName}</option>)}
        </Select>
      </Control>
      <Bar data={data} options={options} />
      {props.calculationFunction && <p>{props.title}: {value}</p>}
    </div>
  );
});
