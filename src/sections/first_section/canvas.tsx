export const renderCanvas = (canvas_ref: any, size: any) => {
    const canvas = canvas_ref.current;
    let context = null;

    if (canvas) {
        canvas.width = size.sizeResponsive.width;
        canvas.height = size.sizeResponsive.height;
        if (canvas != null) {
            context = canvas.getContext("2d");
        }
    }
    return context
}

export const drawInCanvas = async (context: any, image: any, size: any) => {
    if (context === null) return;

    const cleaning = await context.clearRect(0, 0, size.sizeResponsive.width, size.sizeResponsive.height);
    const drawing = await context.drawImage(image, 0, 0, size.sizeResponsive.width, size.sizeResponsive.height);
}

export const sequencePlay = async (context: any, frameIndex: number, sequenceAnimation: any, sequenceSize: number, size: any, setInAnimation: any) => {
    setInAnimation(true);

    let init = frameIndex;
    let image = sequenceAnimation[init];

    const letsDraw = await drawInCanvas(context, image, size);
}
