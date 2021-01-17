import {
  useType,
  useNewComponent,
  useChild,
  Canvas,
  Vector,
  Label,
  SystemFont,
  useDraw,
} from "@hex-engine/2d";
import HexGrid from "./HexGrid";

export default function Root() {
  useType(Root);

  const canvas = useNewComponent(() => Canvas({ backgroundColor: "white" }));
  canvas.fullscreen();

  useChild(() => HexGrid(new Vector(20, 50)));

  useChild(() => {
    const font = useNewComponent(() =>
      SystemFont({ name: "sans-serif", size: 16, color: "black" })
    );
    const label = useNewComponent(() =>
      Label({
        text: "Click cell to set to blue, right-click to set to white",
        font,
      })
    );

    useDraw((context) => {
      label.draw(context, { x: 3, y: font.size });
    });
  });
}
