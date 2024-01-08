IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Travels] (
    [Id] int NOT NULL IDENTITY,
    [DriverId] int NOT NULL,
    [OriginCity] nvarchar(max) NOT NULL,
    [EndCity] nvarchar(max) NOT NULL,
    [Price] int NOT NULL,
    [StartTime] datetime2 NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Travels] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240107001720_First Migration', N'7.0.14');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Travels] ADD [EndTime] datetime2 NOT NULL DEFAULT '0001-01-01T00:00:00.0000000';
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240108010527_Added EndTime', N'7.0.14');
GO

COMMIT;
GO

