import { Appear, Text } from "@gpichot/spectacle-deck";
export const Card = ({ icon, title, subtitle }) => (
	<Appear>
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				background: "rgba(255,255,255,0.07)",
				borderRadius: "12px",
				padding: "20px 8px",
				minWidth: "160px",
				maxWidth: "200px",
				height: "100%",
				boxSizing: "border-box",
			}}
		>
			<img
				src={icon}
				alt={title}
				style={{
					width: "96px",
					height: "96px",
					objectFit: "contain",
					marginBottom: "12px",
				}}
			/>
			<Text
				fontSize="1.2em"
				fontWeight="bold"
				margin={0}
				padding={0}
				style={{ padding: 0 }}
			>
				{title}
			</Text>
			{subtitle && (
				<Text fontSize="1em" margin={0} padding={0} opacity={0.7}>
					{subtitle}
				</Text>
			)}
		</div>
	</Appear>
);
