import React, { CSSProperties, MouseEvent as ReactMouseEvent, HTMLAttributes, ReactNode } from 'react';
import { Selection as D3Selection, ZoomBehavior } from 'd3';

export type ElementId = string;

export type FlowElement<T = any> = Node<T> | Edge<T>;

export type Elements<T = any> = Array<FlowElement<T>>;

export type Transform = [number, number, number];

export type ElementChange = {
  id: string;
  change?: any;
  delete?: boolean;
};

export enum Position {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export interface XYPosition {
  x: number;
  y: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Rect extends Dimensions, XYPosition {}

export interface Box extends XYPosition {
  x2: number;
  y2: number;
}

export type SnapGrid = [number, number];

export interface Node<T = any> {
  id: ElementId;
  position: XYPosition;
  type?: string;
  __rf?: any;
  data?: T;
  style?: CSSProperties;
  className?: string;
  targetPosition?: Position;
  sourcePosition?: Position;
  isHidden?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  dragHandle?: string;
  isDragging?: boolean;
  width?: number | null;
  height?: number | null;
  handleBounds?: any;
  selected?: boolean;
}

export enum ArrowHeadType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

export interface Edge<T = any> {
  id: ElementId;
  type?: string;
  source: ElementId;
  target: ElementId;
  sourceHandle?: ElementId | null;
  targetHandle?: ElementId | null;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
  style?: CSSProperties;
  animated?: boolean;
  arrowHeadType?: ArrowHeadType;
  isHidden?: boolean;
  data?: T;
  className?: string;
  sourceNode?: Node;
  targetNode?: Node;
  selected?: boolean;
}

export enum BackgroundVariant {
  Lines = 'lines',
  Dots = 'dots',
}

export type HandleType = 'source' | 'target';

export type NodeTypesType = { [key: string]: ReactNode };

export type EdgeTypesType = NodeTypesType;

export interface SelectionRect extends Rect {
  startX: number;
  startY: number;
  draw: boolean;
}

export interface WrapEdgeProps<T = any> {
  id: ElementId;
  className?: string;
  type: string;
  data?: T;
  onClick?: (event: React.MouseEvent, edge: Edge) => void;
  onEdgeDoubleClick?: (event: React.MouseEvent, edge: Edge) => void;
  selected: boolean;
  animated?: boolean;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
  style?: CSSProperties;
  arrowHeadType?: ArrowHeadType;
  source: ElementId;
  target: ElementId;
  sourceHandleId: ElementId | null;
  targetHandleId: ElementId | null;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  elementsSelectable?: boolean;
  markerEndId?: string;
  isHidden?: boolean;
  handleEdgeUpdate: boolean;
  onConnectEdge: OnConnectFunc;
  onContextMenu?: (event: React.MouseEvent, edge: Edge) => void;
  onMouseEnter?: (event: React.MouseEvent, edge: Edge) => void;
  onMouseMove?: (event: React.MouseEvent, edge: Edge) => void;
  onMouseLeave?: (event: React.MouseEvent, edge: Edge) => void;
  edgeUpdaterRadius?: number;
  onEdgeUpdateStart?: (event: React.MouseEvent, edge: Edge) => void;
  onEdgeUpdateEnd?: (event: MouseEvent, edge: Edge) => void;
}

export interface EdgeProps<T = any> {
  id: ElementId;
  source: ElementId;
  target: ElementId;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  selected?: boolean;
  animated?: boolean;
  sourcePosition: Position;
  targetPosition: Position;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
  style?: CSSProperties;
  arrowHeadType?: ArrowHeadType;
  markerEndId?: string;
  data?: T;
  sourceHandleId?: ElementId | null;
  targetHandleId?: ElementId | null;
}
export interface EdgeSmoothStepProps<T = any> extends EdgeProps<T> {
  borderRadius?: number;
}

export interface EdgeTextProps extends HTMLAttributes<SVGElement> {
  x: number;
  y: number;
  label?: string | ReactNode;
  labelStyle?: CSSProperties;
  labelShowBg?: boolean;
  labelBgStyle?: CSSProperties;
  labelBgPadding?: [number, number];
  labelBgBorderRadius?: number;
}

export interface NodeProps<T = any> {
  id: ElementId;
  type: string;
  data: T;
  selected: boolean;
  isConnectable: boolean;
  xPos?: number;
  yPos?: number;
  targetPosition?: Position;
  sourcePosition?: Position;
  isDragging?: boolean;
  dragHandle?: string;
}

export interface NodeComponentProps<T = any> {
  id: ElementId;
  type: string;
  data: T;
  selected?: boolean;
  isConnectable: boolean;
  transform?: Transform;
  xPos?: number;
  yPos?: number;
  targetPosition?: Position;
  sourcePosition?: Position;
  onClick?: (node: Node) => void;
  onNodeDoubleClick?: (node: Node) => void;
  onMouseEnter?: (node: Node) => void;
  onMouseMove?: (node: Node) => void;
  onMouseLeave?: (node: Node) => void;
  onContextMenu?: (node: Node) => void;
  onNodeDragStart?: (node: Node) => void;
  onNodeDrag?: (node: Node) => void;
  onNodeDragStop?: (node: Node) => void;
  style?: CSSProperties;
  isDragging?: boolean;
  dragHandle?: string;
}

export interface WrapNodeProps<T = any> {
  id: ElementId;
  type: string;
  data: T;
  selected: boolean;
  scale: number;
  xPos: number;
  yPos: number;
  isSelectable: boolean;
  isDraggable: boolean;
  isConnectable: boolean;
  selectNodesOnDrag: boolean;
  onClick?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDoubleClick?: (event: ReactMouseEvent, node: Node) => void;
  onMouseEnter?: (event: ReactMouseEvent, node: Node) => void;
  onMouseMove?: (event: ReactMouseEvent, node: Node) => void;
  onMouseLeave?: (event: ReactMouseEvent, node: Node) => void;
  onContextMenu?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStart?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDrag?: (event: ReactMouseEvent, node: Node) => void;
  onNodeDragStop?: (event: ReactMouseEvent, node: Node) => void;
  style?: CSSProperties;
  className?: string;
  sourcePosition?: Position;
  targetPosition?: Position;
  isHidden?: boolean;
  isInitialized?: boolean;
  snapToGrid?: boolean;
  snapGrid?: SnapGrid;
  isDragging?: boolean;
  resizeObserver: ResizeObserver | null;
  dragHandle?: string;
}

export type FitViewParams = {
  padding?: number;
  includeHiddenNodes?: boolean;
  minZoom?: number;
  maxZoom?: number;
};

export type FlowExportObject<T = any> = {
  elements: Elements<T>;
  position: [number, number];
  zoom: number;
};

export type FitViewFunc = (fitViewOptions?: FitViewParams) => void;
export type ProjectFunc = (position: XYPosition) => XYPosition;
export type ToObjectFunc<T = any> = () => FlowExportObject<T>;

export type OnLoadParams<T = any> = {
  zoomIn: () => void;
  zoomOut: () => void;
  zoomTo: (zoomLevel: number) => void;
  fitView: FitViewFunc;
  project: ProjectFunc;
  getElements: () => Elements<T>;
  setTransform: (transform: FlowTransform) => void;
  toObject: ToObjectFunc<T>;
};

export type OnLoadFunc<T = any> = (params: OnLoadParams<T>) => void;

export interface Connection {
  source: ElementId | null;
  target: ElementId | null;
  sourceHandle: ElementId | null;
  targetHandle: ElementId | null;
}

export enum ConnectionMode {
  Strict = 'strict',
  Loose = 'loose',
}

export enum ConnectionLineType {
  Bezier = 'default',
  Straight = 'straight',
  Step = 'step',
  SmoothStep = 'smoothstep',
}

export type ConnectionLineComponentProps = {
  sourceX: number;
  sourceY: number;
  sourcePosition?: Position;
  targetX: number;
  targetY: number;
  targetPosition?: Position;
  connectionLineStyle?: CSSProperties;
  connectionLineType: ConnectionLineType;
  sourceNode?: Node;
  sourceHandle?: HandleElement;
};

export type ConnectionLineComponent = React.ComponentType<ConnectionLineComponentProps>;

export type OnConnectFunc = (connection: Connection, nodes: Node[]) => void;
export type OnConnectStartParams = {
  nodeId: ElementId | null;
  handleId: ElementId | null;
  handleType: HandleType | null;
};
export type OnConnectStartFunc = (event: ReactMouseEvent, params: OnConnectStartParams) => void;
export type OnConnectStopFunc = (event: MouseEvent) => void;
export type OnConnectEndFunc = (event: MouseEvent) => void;

export type SetConnectionId = {
  connectionNodeId: ElementId | null;
  connectionHandleId: ElementId | null;
  connectionHandleType: HandleType | null;
};

export interface HandleElement extends XYPosition, Dimensions {
  id?: ElementId | null;
  position: Position;
}

export interface HandleProps {
  type: HandleType;
  position: Position;
  isConnectable?: boolean;
  onConnect?: OnConnectFunc;
  isValidConnection?: (connection: Connection) => boolean;
  id?: ElementId;
}

export type NodePosUpdate = {
  id: ElementId;
  pos: XYPosition;
};

export type NodeDiffUpdate = {
  id?: ElementId;
  diff?: XYPosition;
  isDragging?: boolean;
};

export type FlowTransform = {
  x: number;
  y: number;
  zoom: number;
};

export type TranslateExtent = [[number, number], [number, number]];
export type NodeExtent = TranslateExtent;

export type KeyCode = string | Array<string>;

export enum PanOnScrollMode {
  Free = 'free',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface ZoomPanHelperFunctions {
  zoomIn: () => void;
  zoomOut: () => void;
  zoomTo: (zoomLevel: number) => void;
  transform: (transform: FlowTransform) => void;
  fitView: FitViewFunc;
  setCenter: (x: number, y: number, zoom?: number) => void;
  fitBounds: (bounds: Rect, padding?: number) => void;
  project: (position: XYPosition) => XYPosition;
  initialized: boolean;
}

export type OnEdgeUpdateFunc<T = any> = (oldEdge: Edge<T>, newConnection: Connection) => void;

export type NodeDimensionUpdate = {
  id: ElementId;
  nodeElement: HTMLDivElement;
  forceUpdate?: boolean;
};

export type InitD3ZoomPayload = {
  d3Zoom: ZoomBehavior<Element, unknown>;
  d3Selection: D3Selection<Element, unknown, null, undefined>;
  d3ZoomHandler: ((this: Element, event: any, d: unknown) => void) | undefined;
  transform: Transform;
};

export type OnElementsChange = (nodes: ElementChange[]) => void;

export interface ReactFlowState {
  width: number;
  height: number;
  transform: Transform;
  nodes: Node[];
  edges: Edge[];
  selectedNodesBbox: Rect;
  onNodesChange: OnElementsChange | null;
  onEdgesChange: OnElementsChange | null;

  d3Zoom: ZoomBehavior<Element, unknown> | null;
  d3Selection: D3Selection<Element, unknown, null, undefined> | null;
  d3ZoomHandler: ((this: Element, event: any, d: unknown) => void) | undefined;
  minZoom: number;
  maxZoom: number;
  translateExtent: TranslateExtent;
  nodeExtent: NodeExtent;

  nodesSelectionActive: boolean;
  selectionActive: boolean;

  userSelectionRect: SelectionRect;

  connectionNodeId: ElementId | null;
  connectionHandleId: ElementId | null;
  connectionHandleType: HandleType | null;
  connectionPosition: XYPosition;
  connectionMode: ConnectionMode;

  snapToGrid: boolean;
  snapGrid: SnapGrid;

  nodesDraggable: boolean;
  nodesConnectable: boolean;
  elementsSelectable: boolean;

  multiSelectionActive: boolean;

  reactFlowVersion: string;

  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  updateNodeDimensions: (updates: NodeDimensionUpdate[]) => void;
  updateNodePosDiff: (update: NodeDiffUpdate) => void;
  setUserSelection: (mousePos: XYPosition) => void;
  updateUserSelection: (mousePos: XYPosition) => void;
  unsetUserSelection: () => void;
  unsetNodesSelection: () => void;
  resetSelectedElements: () => void;
  addSelectedElements: (elements: Elements) => void;
  updateTransform: (transform: Transform) => void;
  updateSize: (size: Dimensions) => void;
  initD3Zoom: (payload: InitD3ZoomPayload) => void;
  setMinZoom: (minZoom: number) => void;
  setMaxZoom: (maxZoom: number) => void;
  setTranslateExtent: (translateExtent: TranslateExtent) => void;
  setNodeExtent: (nodeExtent: NodeExtent) => void;
  setOnConnect: (onConnectFunction: OnConnectFunc) => void;
  setOnConnectStart: (onConnectFunction: OnConnectStartFunc) => void;
  setOnConnectStop: (onConnectFunction: OnConnectStopFunc) => void;
  setOnConnectEnd: (onConnectFunction: OnConnectEndFunc) => void;
  setConnectionPosition: (connectionPosition: XYPosition) => void;
  setConnectionNodeId: (payload: SetConnectionId) => void;
  setSnapToGrid: (snapToGrid: boolean) => void;
  setSnapGrid: (snapGrid: SnapGrid) => void;
  setInteractive: (isInteractive: boolean) => void;
  setNodesDraggable: (nodesDraggable: boolean) => void;
  setNodesConnectable: (nodesConnectable: boolean) => void;
  setElementsSelectable: (elementsSelectable: boolean) => void;
  setMultiSelectionActive: (multiSelectionActive: boolean) => void;
  setConnectionMode: (connectionMode: ConnectionMode) => void;
  setOnNodesChange: (onNodesChange: OnElementsChange) => void;
  setOnEdgesChange: (onEdgesChange: OnElementsChange) => void;

  onConnect?: OnConnectFunc;
  onConnectStart?: OnConnectStartFunc;
  onConnectStop?: OnConnectStopFunc;
  onConnectEnd?: OnConnectEndFunc;
}

export type UpdateNodeInternals = (nodeId: ElementId) => void;
