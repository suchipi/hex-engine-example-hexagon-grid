import {
  useType,
  useNewComponent,
  useChild,
  Vector,
  Grid,
  Geometry,
  Polygon,
} from "@hex-engine/2d";
import HexCell, { CELL_WIDTH, CELL_HEIGHT } from "./HexCell";

export default function HexGrid(position: Vector) {
  useType(HexGrid);

  useNewComponent(() =>
    Geometry({
      shape: Polygon.rectangle(0, 0),
      position,
    })
  );

  const grid = new Grid(6, 6, "white");
  grid.set(2, 3, "green");
  grid.set(5, 5, "red");

  for (const [x, y] of grid.contents()) {
    const isOffsetRow = y % 2 === 1;
    const xOffset = isOffsetRow ? CELL_WIDTH / 2 : 0;

    useChild(() =>
      HexCell({
        position: new Vector(x * CELL_WIDTH + xOffset, y * 0.75 * CELL_HEIGHT),
        getColor: () => grid.get(x, y),
        setColor: (newColor: string) => grid.set(x, y, newColor),
      })
    );
  }
}
